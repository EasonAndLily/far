import React from 'react';
import ReactMarkdown from 'react-markdown';
import './detail.css';

let blog = {
  poster:
    'https://blog.zhangruipeng.me/hexo-theme-icarus/gallery/thumbnails/desert.jpg',
  title: '从零开始学Python',
  description: `# Schema 与 Table
  本文的主要目标是学习Schema与Table的增删改查等相关操作。
  ## Schema
  在MySQL中，我们用命令：*show databases;* 可以看到下面四个数据库(Schema)：
  \`\`\`sql
  +--------------------+
  | Database           |
  +--------------------+
  | information_schema |
  | mysql              |
  | performance_schema |
  | sys                |
  +--------------------+
  4 rows in set (0.03 sec)
  \`\`\`
  
  这四个数据库(Schema)是MySQL自带的，后面我们会详细介绍。问题是，如何创建自己需要的数据库(Schema)？如何显示已经创建的数据库(Schema)信息？如何修改和删除它？下面我们详细介绍。
  *注意： Schema中文是模式的意思，在MySQL中与数据库同义，所以后面我们用Schema代指数据库。*
  ### 创建Schema
创建Schema的语法很简单：

\`\`\`sql
CREATE DATABASE [SchemaName] DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
\`\`\`

需要说明的是：**DEFAULT后面的是制定utf8的编码格式，推荐大家用这种编码格式。**
例如：创建一个教育管理系统数据库。

\`\`\`sql
CREATE DATABASE edu_managerment_sys DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
\`\`\`

返回结果：
\`\`\`sql
Query OK, 1 row affected (0.00 sec)
\`\`\`

表示创建成功，可以用show databases;去查看。
### 获取Schema信息
我们刚刚创建的Schema会被存储到MySQL的默认数据库information_schema，所以查询这个数据的的表记录就可以获得刚刚创建的Schema的信息，目前暂时不做介绍。
### 修改Schema

修改Schema并不多见，偶然也会遇到，比如修改Schema的名称，字符编码等。
\`\`\`sql
RENAME {DATABASE | SCHEMA} db_name TO new_db_name;
\`\`\`

例如：
\`\`\`sql
RENAME DATABASE edu_managerment_sys TO education_managerment_system;
\`\`\`

**需要注意的是：目前新版的MySQL已经删除了修改Schema的功能，原因是修改数据库会带来一定的安全风险。**
返回结果：

\`\`\`sql
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'DATABASE edu_managerment_sys TO education_managerment_system' at line 1
\`\`\`

所以，要想修改Schema，最好的方式就是新建一个Schema，然后从旧的Schema中将数据导入到新建的Schema中。
### 删除Schema
如果一个数据库废弃了，删除它是最好的选择：
\`\`\`sql
DROP DATABASE [SchemaName];
\`\`\`

例如：
\`\`\`sql
DROP DATABASE edu_managerment_sys;
\`\`\`

返回结果：
\`\`\`sql
Query OK, 0 rows affected (0.02 sec)
\`\`\`

相关参考链接:
* [Creating a MySQL Database Schema](https://docs.rapidminer.com/latest/server/installation/creating_mysql_db.html)
* [How to Create a Database from a Script in MySQL](https://database.guide/how-to-create-a-database-from-a-script-in-mysql/)

## Table
上面一节我们学习了Schema，接下来我们进入Schema来看看如何创建表(Table)：
进入Schema：
\`\`\`sql
use [schema];
\`\`\`

例如：
\`\`\`sql
use education_managerment_system;
\`\`\`

返回：
\`\`\`sql
Database changed
\`\`\`

### 表列行(Table/Column/Row)
在Schema中，**表(Table)**是存储数据的集合，任何数据记录都存储在表里; **列(Column)**就是表的一个字段，代指的是某类信息; **行(Row)** 表示的是表中的一条记录，是一个实体数据。
比如下面的学生表(student)：
| 学号 | 姓名 | 年龄 | 性别 |
| ---- | ---- | ---- | ---- |
| 001  | 张三 | 18   | 男   |
| 002  | 李四 | 20   | 女   |

那么学号、姓名等就是列，而001，张三这一行就是表的一条记录，称为行。
### 创建表
上面我们学习表的相关概念，那么如何创建表呢？
语法：
\`\`\`sql
CREATE TABLE table_name (column_name column_type [constraint]) ENGINE=InnoDB DEFAULT CHARSET=utf8;
\`\`\`

注意：
* ENGINE=InnoDB： 表示用InnoDB引擎来创建表。
* DEFAULT CHARSET=utf8：表示设置表的默认编码。
* constraint: 表示的是一种约束，可省略，后面会详细介绍。

例如，创建一个学生表：student
\`\`\`sql
CREATE TABLE student (
    \`id\` INT NOT NULL,
    \`name\` VARCHAR(100) NOT NULL,
    \`age\` INT NOT NULL,
    \`sex\` VARCHAR(100) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
\`\`\`

返回结果：
\`\`\`sql
Query OK, 0 rows affected (0.03 sec)
\`\`\`
*关于列的字段类型，下一节我们会详细讲解！*

### 显示表
我们刚刚创建了一个student表，如何知道表是否创建成功？
语法：
\`\`\`sql
SHOW TABLES;
\`\`\`

返回结果：
\`\`\`sql
+----------------------------------------+
| Tables_in_education_managerment_system |
+----------------------------------------+
| student                                |
+----------------------------------------+
1 row in set (0.00 sec)
\`\`\`

### 修改表
修改表主要有关于表的信息修改和表的列信息修改：
#### 修改表名称

语法：
\`\`\`sql
RENAME TABLE [old_table] TO [new_table];
\`\`\`
例如修改student表为student_info:
\`\`\`sql
RENAME TABLE student TO student_info;
\`\`\`

返回结果：
\`\`\`sql
Query OK, 0 rows affected (0.00 sec)
\`\`\`

#### 修改列
* 增加列：
  \`\`\`sql
  ALTER TABLE table_name ADD COLUMN column_name column_type;
  \`\`\`
* 修改列类型
  \`\`\`sql
  ALTER TABLE table_name MODIFY column_name column_type;
  \`\`\`
* 删除列
  \`\`\`sql
  ALTER TABLE table_name DROP COLUMN column_name;
  \`\`\`

例如：
\`\`\`sql
ALTER TABLE student_info ADD COLUMN class_name VARCHAR(100);
ALTER TABLE student_info MODIFY class_name INT;
ALTER TABLE student_info DROP COLUMN class_name;
\`\`\`

可以用下面的语句来显示列的详细信息：
\`\`\`sql
SHOW COLUMNS FROM table_name;
\`\`\`

例如：
\`\`\`sql
SHOW COLUMNS FROM student_info;
\`\`\`

显示：
\`\`\`sql
+------------+--------------+------+-----+---------+-------+
| Field      | Type         | Null | Key | Default | Extra |
+------------+--------------+------+-----+---------+-------+
| id         | int(11)      | NO   |     | NULL    |       |
| name       | varchar(100) | NO   |     | NULL    |       |
| age        | int(11)      | NO   |     | NULL    |       |
| sex        | varchar(100) | NO   |     | NULL    |       |
| class_name | int(11)      | YES  |     | NULL    |       |
+------------+--------------+------+-----+---------+-------+
5 rows in set (0.01 sec)
\`\`\`

### 删除表
删除表的语法十分简单：
\`\`\`sql
DROP TABLE table_name;
\`\`\`
此处不再举例。

相关参考链接：
* [Createing a Table](https://dev.mysql.com/doc/refman/8.0/en/creating-tables.html)
* [MySQL CREATE TABLE syntax](http://www.mysqltutorial.org/mysql-create-table/)

## SQL
SQL是结构化查询语言(Structured Query Language)的缩写，是一种专门用来与数据库通信的语言。设计SQL的目的是很好地完成一项任务，即提供一种从数据库中读写数据的简单有效的方法。
所以上面我们写的那些任务都是SQL。
`
};

function Detail() {
  return (
    <section className="col col-sm-9 opacity-9">
      <header className="card bg-white shadow">
        <img src={blog.poster} className="card-img-top" alt="..." />

        <div className="card-body p-2">
          <ReactMarkdown source={blog.description}></ReactMarkdown>
        </div>
        <div className="card-footer">
          <ul className="list-inline m-0 d-flex justify-content-end">
            <li className="list-inline-item">
              <button
                type="button"
                class="p-0 btn btn-default btn-image update-time"
                disabled>
                两天前
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                class="p-0 btn btn-default btn-image thumds-up">
                12344
              </button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="p-0 btn btn-default btn-image share"></button>
            </li>
            <li className="list-inline-item">
              <button
                type="button"
                className="p-0 btn btn-default btn-image comment"></button>
            </li>
          </ul>
        </div>
      </header>
    </section>
  );
}

export default Detail;
