# https://www.selenium.dev/documentation/webdriver/getting_started/first_script/
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys

path = "C:\\Users\\shani\\PycharmProjects\\3D\\chromedriver.exe"
driver = webdriver.Chrome(path)
driver.get("https://www.techwithtim.net/")
# Find an element
search = driver.find_element(By.CLASS_NAME, "eNunqU")

element = driver.find_element(By.TAG_NAME, 'div')
elements = element.find_elements(By.TAG_NAME, 'p')
for e in elements:
    print(e.text)


time.sleep(5)
driver.quit()

# output
# Clear, concise, and easy to follow with step by step instructions to guide you through each lesson.
# Put your skills to the test with our coding challenges for a chance to win real cash prizes!
# For those who want to dive deeper in the world of programming and become true Software Engineers!
# I'm Tim Ruscica, a software developer and content creator behind the Tech With Tim YouTube channel.
# I love sharing my knowledge and helping people achieve their goals. Whether you're just starting out or looking to improve your skills, I've got you covered with easy-to-follow tutorials and tips.
# Access the latest video tutorials, coding challenges, and live streams. Subscribe and stay up to date!
# A place to ask your programming questions, share ideas, and network with other learners!

# Process finished with exit code 0
