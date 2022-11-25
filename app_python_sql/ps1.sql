
CREATE TABLESPACE my_tb_space LOCATION '/pg/data'; -- создаем табличное пространство в каталоге /pg/data


-- в БД создаем таблицу tacc, состоящую из колонок: nid, acc, nrest, timest
create table tacc(
nid int8,
acc varchar(20),
nrest float8,
timest timestamp default LOCALTIMESTAMP --timestamp - тип даты и времени (дата и время), LOCALTIMESTAMP-ф-ция возвращ текущую дату и время
) TABLESPACE my_tb_space; -- TABLESPACE указывает место хранения табл tacc


alter table tacc add create_date date; -- изменяем табл tacc, добавляем колонку create_date - тип даты date (дата без указания времени)
alter table tacc drop column create_date; -- удаление колонки create_date 


create sequence seq_acc; -- создаем генератор последовательности sequence

-- добавляем строки в табл tacc в БД (имена столбцов - id, счет, остаток)
--где значение в столбце nid будет формироваться при помощи ф-ции последовательности nextval и генератора последовательности sequence
-- acc, nrest - заносим ручками в интерфейсе
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233333', 58.22);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233334', 25);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233335', 11.58);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233336', 10);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233337', 1000.91);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233338', 31.50);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233339', 35.50);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40820810912222233339', 0.50);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40820810912222233339', 10.50);
insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40820810912222233300', null);
-- после кажд изменения в БД обязательно commit - фиксирует текущую транзакцию
commit;
--rollback;   откатывает последние изменения

-- обновление в табл tacc, изменился остаток nrest по счету 40817
update tacc
set nrest = nrest - 20
where acc = '40817810912222233337';

-- удаляем в табл tacc строку, где счет = 40820810912222233300
delete from tacc
where acc = '40820810912222233300';

commit; -- сохраняем изменения в табл после работы с ней (update, delete)

select *
from tacc t
--where nrest is null
--where t.nrest > 15
order by nid desc; -- выборка данных по колонке nid в порядке убывания (order by nid ask - по возраст)

select t.nrest
from tacc t
where acc = '40820810912222233339'; -- запрашиваем остаток по счету nrest 40820..39


-- вставляем в табл строку, где значение в столбце nid будет формироваться при помощи ф-ции последовательности nextval 
-- и генератора последовательности sequence
insert into tacc (nid, acc, nrest, create_date) values (nextval('seq_acc'), '40820810912222233300', null, TO_DATE('25.05.2022','DD.MM.YYYY'));

--функция конвертации строки в дату
SELECT TO_DATE('25.05.2022','DD.MM.YYYY'); 

select nextval('seq_acc'); --функция возвращает следующее значение последовательности

select user; -- функция возвращает текущего пользователя


-- пример на языке plpgsql
DO $$
DECLARE
    city_names varchar;
BEGIN
    city_names:= 'gggggg';

    FOR i in 2..1000000
        LOOP
            insert into tacc values (i, md5(random()::text));
            insert into tacc (nid, acc, nrest) values (nextval('seq_acc'), '40817810912222233337', 1000.91);
        END LOOP;

    raise notice 'city_names: %', city_names;
END$$;