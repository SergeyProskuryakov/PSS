# С помощью if проверить, что из перечисленного
# является истинным, а что - ложным?
# 3, 0, '', [], False, True, 'mama'

# if 3:
#     print(3, 'истинно')
# else:
#     print(3, 'ложно')
# if '':
#     print('', 'istinno')
# else:
#     print('', 'ложно')
# if 0:
#     print(0, 'istinno')
# else:
#     print(0, 'ложно')
# if []:
#     print([], 'istinno')
# else:
#     print([], 'ложно')
# if False:
#     print(False, 'istinno')
# else:
#     print(False, 'ложно')
# if True:
#     print(True, 'istinni')
# else:
#     print(True, 'ложно')
# if 'mama':
#     print('mama', 'istinno')
# else:
#     print('mama', 'ложно')




# Дописать задачку про возраст,
# запросив день и месяц рождения

# current_year = 2023
# your_year = input('Your year of birth: ')
# your_year = int(your_year)
# my_age = current_year - your_year
# print(my_age)

# month = 6
# day = 21
# your_month = int(input('Your month of birth: '))
# your_day = int(input('Your day of birth: '))

# if your_day > day:
#     your_month += 1
# if your_month > month:
#     your_year += 1

# if my_age > 18:
#     print('Взрослый')
# else:
#     print('rebenok')




# ПАНДА-ПАРК: есть 4 трассы
# чёрная, красная, зеленая, синяя
# от 170 см, 155, 140 и остальные

rost = int(input('vvedite rost: '))
if rost > 180:
    print('Зачем Вам тут кататься? идите в бар!')
elif rost <= 180 and rost >= 170:
    print('Вам доступна чёрная трасса')
elif rost < 170 and rost >= 155:
    print('Вам доступна красная трасса')
elif rost < 155 and rost >= 140:
    print('Вам доступна синяя трасса')
else:
    print('Для самых маленьких - зелёная трасса (с родителями)')
