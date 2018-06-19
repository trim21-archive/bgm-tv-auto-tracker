FROM python:3.6.5-stretch

RUN pip install pytz==2018.4 requests==2.19.1 motor==1.2.2 aiohttp==3.3.2 aiohttp_cors==0.7.0 aiohttp-jinja2==1.0.0 python-dateutil==2.7.3

COPY server /server


EXPOSE 6001
CMD [ "python", "server/app.py" ]