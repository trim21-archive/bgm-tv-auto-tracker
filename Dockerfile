FROM python:3.8.0b1-alpine
EXPOSE 6003

COPY server/requirements.txt /server/requirements.txt

RUN pip install -r server/requirements.txt

COPY server /server

CMD [ "sh", "/server/entrypoint.sh" ]
