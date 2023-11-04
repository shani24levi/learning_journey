#Page Objects
# https://selenium-python.readthedocs.io/page-objects.html


#code:
import unittest
from selenium import webdriver
import page

#We inherit from the unittest.TestCase class because it gives us additional functionality that we need for the class.
# The purpose of the class is to have a function that will perform some sort of test
# Returns us a good OUTPUT defined from the class we inherited
class PythonSearch(unittest.TestCase):
    def setUp(self):
        path = "C:\\Users\\shani\\PycharmProjects\\3D\\chromedriver.exe"
        self.driver = webdriver.Chrome(path)
        self.driver.get("http://www.python.org")
        # setUp is like a constarctor/useeffect[]
        # runs first when setting up the class

    def test_search_in_python_org(self):
        """ def starts in test_((name of the func))
            tset_ meens to testCase we need it do preform test inehreted """
        print("test")
        assert True

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()



# output:
"""
test
.C:\Users\shani\.conda\envs\pyinstallerD\lib\unittest\suite.py:84: ResourceWarning: unclosed <socket.socket fd=632, family=AddressFamily.AF_INET6, type=SocketKind.SOCK_STREAM, proto=0, laddr=('::1', 51802, 0, 0), raddr=('::1', 51799, 0, 0)>
  return self.run(*args, **kwds)
ResourceWarning: Enable tracemalloc to get the object allocation traceback

----------------------------------------------------------------------
Ran 1 test in 6.820s

OK

Process finished with exit code 0
"""