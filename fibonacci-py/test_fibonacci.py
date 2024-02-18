import unittest
import io
import sys
from contextlib import redirect_stdout
# Import the function from the main code
from fibonacci import fib

class TestFibonacci(unittest.TestCase):
    def test_fib(self):
        f = io.StringIO()
        with redirect_stdout(f):
            fib(10)
        s = f.getvalue().strip().split('\n')
        expected_output = ['0', '1', '1', '2', '3', '5', '8', '13', '21', '34']
        self.assertEqual(s, expected_output)

if __name__ == '__main__':
    unittest.main()