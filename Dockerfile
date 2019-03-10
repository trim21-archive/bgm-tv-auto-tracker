FROM python:3.7.2-alpine

COPY server/requirements.txt /server/requirements.txt

RUN pip install -r server/requirements.txt

COPY server /server

EXPOSE 6003

CMD [ "sh", "/server/entrypoint.sh" ]
