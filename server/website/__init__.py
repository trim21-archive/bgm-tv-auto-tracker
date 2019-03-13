import abc
from abc import ABC
from typing import Type
from urllib.parse import urlparse


class BaseWebsite(ABC):
    @staticmethod
    @abc.abstractmethod
    def link_to_ep_id(link: str) -> str:
        pass

    @staticmethod
    @abc.abstractmethod
    def ep_id_to_link(ep_id: str) -> str:
        pass


class Iqiyi(BaseWebsite):
    @staticmethod
    def link_to_ep_id(link: str) -> str:
        try:
            return link.split('/')[-1].split('.')[0].split('_')[-1]
        except IndexError:
            raise ValueError('not valid link')

    @staticmethod
    def ep_id_to_link(ep_id: str) -> str:
        return f'https://www.iqiyi.com/v_{ep_id}.html'


class Bilibili(BaseWebsite):
    @staticmethod
    def link_to_ep_id(link: str) -> str:
        url_obj = urlparse(link)
        path: str = url_obj.path
        if path.endswith('/'):
            path = path[:-1]
        if 'ss' in path:
            raise ValueError('ss should not be include in link')
        return path.split('/ep')[-1]

    @staticmethod
    def ep_id_to_link(ep_id: str) -> str:
        return f'https://www.bilibili.com/bangumi/play/ep{ep_id}'


class Other(BaseWebsite):
    @staticmethod
    def link_to_ep_id(link: str) -> str:
        return link

    @staticmethod
    def ep_id_to_link(ep_id: str) -> str:
        return ep_id


def get_website_parser(website: str) -> Type[BaseWebsite]:
    if website == 'iqiyi':
        return Iqiyi
    if website == 'bilibili':
        return Bilibili
    return Other
