class BasePage(object):
    """Base page class that is initialized on every page object class."""
    def __init__(self,driver):
        self.driver = driver

# inhart from BasePage
class MainPage(BasePage):
    def is_matches(self):
        return "Python" in self.driver.title