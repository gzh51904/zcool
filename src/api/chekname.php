<?php 
//链接数据库
include 'conn.php';
//接收前端数据
$name = isset($_POST['name'])?$_POST['name'] : '';
//执行sql语句
$sql = "SELECT * FROM `userinf`WHERE name = '$name'";
//拿到结果集
$res = $conn ->query($sql);
if($res->num_rows) {
    echo 'no';
}else{
    echo 'yes';
}

 ?>