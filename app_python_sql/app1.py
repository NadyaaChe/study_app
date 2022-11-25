# импортируем фреймворк Flask
from flask import Flask, request

# модуль для работы со временем 
import time

# библиотека для работы с БД PostgreSQL
import psycopg2

# подключаем модуль для работы с HTTP-запросами
import requests

# подключаемся к БД
connection = psycopg2.connect(user="user1",		# логин
                              password="123",	# пароль
                              host="localhost",
                              port="5432",
                              database='db1')	# название БД



# создаем экземпляр приложения Flask и присваиваем ему имя app
app = Flask(__name__)

'''
объявляем фунцию expan с параметрами а и b, которая возвращает результат
возведения параметра а в степень b после того как выполнится 
метод time.sleep - остановка потока на 1 сек для имитации работы БД
'''
def expan(a, b):
	time.sleep(1)
	return str(a**b)



# метод возвращает строку Hello, World!
@app.route('/')
def hello():
    return 'Hello, World!'



# аналогично, только для страницы  /hello2
@app.route('/hello2')
def hello2():
    return "<h1>Hello, World!</h1>"



# метод возведения числа в степень 
# на вход принимает 2 параметра (par1, par2)
@app.route('/app/v1/exponentiation') # подключаем к пути /app/v1/exponentiation
def exponentiation():
	a = request.args # получаем параметры
	print('par1 = ', a.get('par1')) # выводим в консоль
	print('par2 = ', a.get('par2'))
	return expan(int(a.get('par1')), int(a.get('par2'))) # возводим в степень и сразу возвращаем результат



@app.route('/acc') # декоратор route указывает фреймворку Flask, что необх выполнить ф-цию get_acc на пути /acc
def get_acc():
	cur = connection.cursor() # создаем курсор для выполнения sql команд
	pars = request.args    # получаем параметры
	if pars.get('id') == None:
		cur.execute('select acc, nrest, timest from tacc;') # отправляем запрос в БД для выбора всех строк
	else:
		# в ветке else 2 параметра: 1 - sql запрос в виде строки, а второй в виде функции int
		cur.execute('select acc, nrest, timest from tacc where nid = %s;', (int(pars.get('id')),))
	
	# метод fetchall() извлекает(вытягивает) все строки результата запроса из БД
	rows = cur.fetchall() 
	# закрываем курсор: не расстрачивает оперативную память для создания ненужных подключений, не забивает базу ненужными подключениями,
	# исключается ошибка блокировки данных
	cur.close() 
	# возвращаем результат                                                                             
	return rows 



@app.route('/insert_acc')
def insert_acc():
	cur = connection.cursor()
	pars = request.args
	# отправляем запрос в БД (4 параметра)
	# отправляем запрос в БД: вставить новую запись в табл tacc (имена столбцов - id, счет, остаток, дата создания)
	# где значение в столбце nid будет формироваться при помощи ф-ции последовательности nextval и генератора последовательности sequence
	# acc, nrest - заносим ручками в интерфейсе
	# create_date - дата заносится в интерфейсе в виде строки и преобразуется в дату посредством ф-ции TO_DATE в заданном формате
	cur.execute("insert into tacc (nid, acc, nrest, create_date) values (nextval('seq_acc'), %s, %s, TO_DATE(%s,'DD.MM.YYYY'));", (pars.get('acc'), pars.get('rest'), pars.get('cr_date')))
	# если изменения имели место быть, то вносим их в БД commit, иначе все откатываем rollback, не сохраняем изменения в БД
	if pars.get('commit') == 'true':
		connection.commit()
	else:
		connection.rollback()
	#resords = cur.fetchall()
	cur.close()
	# возвращаем результат в виде строки good res в интерфейсе
	return 'good res'



# пример кода запроса погоды, необх регистрация на  OpenWeatherMap.org

@app.route('/weather')
def get_weather():
	s = requests.get("http://api.openweathermap.org/data/2.5/find",
                 params={'q': 'Petersburg,RU', 'type': 'like', 'units': 'metric', 'APPID': 'буквенно-цифровой APPID'})
	return s.json()


