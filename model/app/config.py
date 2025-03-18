import os 


class Config : 
    API_VERSION = "/v1" 

class DevelopmentConfig(Config): 
    DEBUG=True

class TestingConfig(Config):
    TESTING=True
    API_VERSION="v1/test"

class ProductionConfig(Config):
    DEBUG = False 