import requests
import json
import secrets


class Transmission:

    def __init__(self, url: str, user: str = '', password: str = ''):
        self.url = url
        self.user = user
        self.password = password
        self.session_id = ''

    def send(self, method: str, arguments: dict) -> dict:
        tag = secrets.randbelow(65536)
        payload = {
            'method': method,
            'arguments': arguments,
            'tag': tag
        }

        data = json.dumps(payload)
        auth = (self.user, self.password) if self.user and self.password else None
        headers = {'content-type': 'application/json'}

        while True:
            headers['x-transmission-session-id'] = self.session_id

            r = requests.post(
                self.url,
                data=data,
                auth=auth,
                headers=headers
            )

            if r.status_code == 200:
                j = r.json()
                if j['result'] != 'success':
                    raise ValueError # TODO
                if j['tag'] != tag:
                    raise ValueError # TODO
                return j['arguments']
            elif r.status_code == 409:
                self.session_id = r.headers['x-transmission-session-id']
            else:
                r.raise_for_status()
