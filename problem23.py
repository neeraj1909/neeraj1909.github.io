
from math import sqrt

def list_of_divisors(n):
    divisors=[1]
    for i in range(2,int(sqrt(n))+1):
        if n % i == 0:
            divisors.append(i)
            another_factor = n / i
            divisors.append(another_factor)
    return  divisors
    
def is_prime(n):
    return len(list_of_divisors(n)) == 1
    

def is_abundant_number(n):
    return n < sum(list_of_divisors(n))

abundant_number = []  
for i in range(10, 28124):
    if is_abundant_number(i):
        abundant_number.append(i)

def as_sum_of_two_abundants(abundant_number,number):
    if is_prime(n):
        return True
    for x in abundant_number:
        for y in abundant_number:
            if (x + y) == number and y < number:
                return False
    return True   

total = 0
for n in range(24,28124):
    if as_sum_of_two_abundants(abundant_number,n):
        total = total + n
        print("%s" % n)

print("%s" % total)