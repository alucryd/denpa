from flask import g, jsonify, render_template, request

from denpa import app, t


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/torrents', methods=['GET'])
def torrents():
    method = 'torrent-get'
    arguments = {
        'fields': [
            'id',
            'name',
            'eta',
            'percentDone',
            'totalSize',
            'rateDownload',
            'rateUpload',
            'downloadedEver',
            'uploadedEver',
            'uploadRatio',
            'status'
        ]
    }
    return jsonify(t.send(method, arguments)['torrents'])


@app.route('/torrents/<int:id>/start', methods=['POST'])
def start_torrent(id: int):
    method = 'torrent-start'
    arguments = {
        'ids': id
    }
    return jsonify(t.send(method, arguments))


@app.route('/torrents/<int:id>/stop', methods=['POST'])
def stop_torrent(id: int):
    method = 'torrent-stop'
    arguments = {
        'ids': id
    }
    return jsonify(t.send(method, arguments))

@app.route('/torrents/<int:id>/remove', methods=['POST'])
def remove_torrent(id: int):
    method = 'torrent-remove'
    arguments = {
        'ids': id
    }
    return jsonify(t.send(method, arguments))
