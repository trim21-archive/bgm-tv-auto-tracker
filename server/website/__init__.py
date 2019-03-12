import abc
from abc import ABC


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
        pass

    @staticmethod
    def ep_id_to_link(ep_id: str) -> str:
        pass


class Bilibili(ABC):
    @staticmethod
    def link_to_ep_id(link: str) -> str:
        pass

    @staticmethod
    def ep_id_to_link(ep_id: str) -> str:
        return f'https://www.bilibili.com/bangumi/play/ep{ep_id}'
