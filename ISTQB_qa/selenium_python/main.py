# using anaconda environment craeted 
from selenium import webdriver
path = "C:\\Users\\shani\\PycharmProjects\\3D\\chromedriver.exe"

driver = webdriver.Chrome(path)
driver.get("https://www.techwithtim.net/")
print(driver.title)
driver.quit()
