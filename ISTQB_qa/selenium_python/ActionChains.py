# ActionChains 
# from selenium.webdriver.common.action_chains import ActionChains
# docs: https://selenium-python.readthedocs.io/api.html#module-selenium.webdriver.common.action_chains
# זה אובייקט שיוצרים שהוא אובייקא שמחזיק כמה פעולות שאנחנו מייצרים
# זה כמו מחלקה של פעולות , פעולות שמוגדרות באתר על אלמנטים כמו
# קליק, מעבר עכבר, לחיצה על מקלקדת , כל הפעולות רשומות בדוקס

#מימוש
from selenium import webdriver
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

path = "C:\\Users\\shani\\PycharmProjects\\3D\\chromedriver.exe"
driver = webdriver.Chrome(path)
driver.get("https://orteil.dashnet.org/cookieclicker/")

driver.implicitly_wait(5)
# becouse we have loading befor geeting to the html page
# we need to wait before we accsess to alements
# need to make sure the html has loaded
# cookies elemant is in the homePage html , comes afteer loadingPage
# loading is defulte when refrash the website
cookie = driver.find_element(By.ID, 'bigCookie')
cookies = driver.find_element(By.ID, 'cookies')
items = [driver.find_element(By.ID, 'prodactPrice' + str(i)) for i in range(1,-1,-1)]
#items => ["prodactPrice1", "prodactPrice2", "prodactPrice3" ....]
## becouse we see in the html list of
# <spen id="prodactPrice1"/>
# <spen id="prodactPrice2"/>
# <spen id="prodactPrice3"/>

action = ActionChains(driver)
action.click(cookie)

for i in 5000:
    action.perform()
    # dos action.click(cookie) for 5000 times
    # clicking elment with id cookie after we do perform 

time.sleep(5)
driver.quit()


"""
בדיקה עם Python. ActionChains הם דרך לבצע אוטומציה של אינטראקציות ברמה נמוכה כגון תנועות עכבר, פעולות כפתורי עכבר, לחיצת מקש ואינטראקציות בתפריט ההקשר. זה שימושי לביצוע פעולות מורכבות יותר כמו ריחוף מעל וגרור ושחרר. שיטות שרשרת פעולה משמשות סקריפטים מתקדמים שבהם אנחנו צריכים לגרור אלמנט, ללחוץ על אלמנט, מאמר זה עוסק כיצד לתפעל DOM באמצעות Action Chains בסלניום. כיסינו את כל השיטות עם דוגמאות פרטניות.

ActionChains מיושמים בעזרת אובייקט שרשרת פעולה אשר מאחסן את הפעולות בתור וכאשר נקרא perform() מבצע את הפעולות בתור.
"""