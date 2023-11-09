# Selenium Browser Automation

| Language | IDE     | test runners                      |
| :-------- | :------- | :--------------------------------------- |
| Java | `Eclipse` | **TestNG** Offers extra features like parallel test execution and parameterized tests |
| Python | `PyCharm` | **pytest** |
| Javascript | `VS Code` | **Jest\Mocha** |

##  Selenium
סלניום הוא הרבה דברים, אבל בבסיסו, הוא ערכת כלים לאוטומציה של דפדפן אינטרנט המשתמשת בטכניקות הטובות ביותר הזמינות כדי לשלוט מרחוק על מופעי דפדפן ולדמות את האינטראקציה של המשתמש עם הדפדפן.

סלניום מאפשר למשתמשים לדמות פעילויות נפוצות המבוצעות על ידי משתמשי קצה; הזנת טקסט לשדות, בחירת ערכים נפתחים וסימון תיבות סימון ולחיצה על קישורים במסמכים. הוא מספק גם פקדים רבים אחרים כגון תנועת עכבר, ביצוע שרירותי של JavaScript ועוד הרבה יותר.

למרות שמשמשת בעיקר לבדיקות חזיתיות של אתרי אינטרנט, סלניום היא, בליבתה, ספריית סוכן משתמש של דפדפן. הממשקים נמצאים בכל מקום ליישום שלהם, ומעודדים קומפוזיציה עם ספריות אחרות כדי להתאים למטרה שלך.

##  WebDriver drives
WebDriver drives a browser natively, as a user would, either locally or on a remote machine using the Selenium server, marks a leap forward in terms of browser automation.
Selenium WebDriver refers to both the language bindings and the implementations of the individual browser controlling code. This is commonly referred to as just WebDriver.

## Web elements
Identifying and working with element objects in the DOM.</br>
`
from selenium import webdriver;
driver.get("https://.....");
driver.find_element(By.ID,"file-upload").send_keys("selenium-snapshot.jpg");
driver.find_element(By.ID,"file-submit").submit();
if(driver.page_source.find("File Uploaded!")):
    print("file upload success")
else:
    print("file upload not successful")
driver.quit()
`</br>

Locating the elements based on the provided locator values.

 Click on the element </br>
` driver.find_element(By.NAME, "color_input").click()`

There are a number of details you can query about a specific element.



## Refaces
docs: https://www.selenium.dev/documentation/ </br>
docs selenuim py : https://selenium-python.readthedocs.io/ </br>

video guid: https://www.youtube.com/watch?v=b5jt2bhSeXs&list=PLzMcBGfZo4-n40rB1XaJ0ak1bemvlqumQ&index=2

selenuim py gaid: https://www.geeksforgeeks.org/selenium-python-tutorial/


## Need To Know
- basic html element
- css class is not quink for spastic element
