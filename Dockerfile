FROM python:3.7-stretch

COPY server /server
COPY entrypoint.sh /entrypoint.sh

RUN pip install -r server/requirements.txt

EXPOSE 6003

CMD [ "/bin/bash", "entrypoint.sh" ]
