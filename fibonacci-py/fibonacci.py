## write a function that generates a fibonacci sequence of n numbers and print it out
def fib(n):
    a = 0
    b = 1
    for i in range(n):
        print(a)
        a, b = b, a + b

fib(10)

