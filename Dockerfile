FROM python:3.6.5-stretch

COPY server /server

RUN pip install -r server/requirements.txt


EXPOSE 6001
CMD [ "python", "server/app.py" ]