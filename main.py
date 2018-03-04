from __future__ import print_function
import httplib2
import os, io, shutil

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage
from apiclient.http import MediaFileUpload, MediaIoBaseDownload
try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None
SCOPES = 'https://www.googleapis.com/auth/drive'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Drive API Python Quickstart'

cwd_dir = os.getcwd()
credential_dir = os.path.join(cwd_dir, '.credentials')
if not os.path.exists(credential_dir):
    os.makedirs(credential_dir)
credential_path = os.path.join(credential_dir,'google-drive-credentials.json')
store = Storage(credential_path)
credentials = store.get()
if not credentials or credentials.invalid:
    flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
    flow.user_agent = APPLICATION_NAME
    if flags:
        credentials = tools.run_flow(flow, store, flags)
    else: # Needed only for compatibility with Python 2.6
        credentials = tools.run(flow, store)
    print('Storing credentials to ' + credential_path)
http = credentials.authorize(httplib2.Http())
drive_service = discovery.build('drive', 'v3', http=http)

def listFiles(size):
    results = drive_service.files().list(
        pageSize=size,fields="nextPageToken, files(id, name)").execute()
    items = results.get('files', [])
    if not items:
        print('No files found.')
    else:
        print('Files:')
        for item in items:
            print('{0} ({1})'.format(item['name'], item['id']))
        return items
def downloadFile(file_id,filepath, name):
    if name[-3:] == 'pdf' or name[-3:] == 'PDF':
        request = drive_service.files().get_media(fileId=file_id)
    elif name[-4:] == 'docx':
        drive_service.files().export_media(fileId=file_id,
                                                 mimeType='application/vnd.openxmlformats-officedocument.wordprocessingml.document')
    else:
        request = drive_service.files().export_media(fileId=file_id,
                                                 mimeType='application/pdf')
    fh = io.BytesIO()
    downloader = MediaIoBaseDownload(fh, request)
    done = False
    while done is False:
        status, done = downloader.next_chunk()
        print("Download %d%%." % int(status.progress() * 100))
    with io.open(filepath,'wb') as f:
        fh.seek(0)
        f.write(fh.read())
downloads = '\src\downloads'
if not os.path.exists(downloads):
    os.makedirs(downloads)
items = listFiles(10)
for x in range(0,6):
    try:
        downloadFile(items[x]['id'],downloads + '\\' + items[x]['name'], items[x]['name'])
    except:
        pass

#shutil.rmtree('\python\.credentials')
