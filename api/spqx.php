<?php
$servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'html_1805';
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    // 检测连接是否成功
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');


    // 接收请求参数
    $id = isset($_GET['id']) ? $_GET['id'] : 1;
    $sql = "select * from goodslist where id=".$id;
  

    // echo "$sql";
    
    // 读取数据
    // 获取查询结果集（集合）
    $result = $conn->query($sql);
    $row = $result->fetch_all(MYSQLI_ASSOC);
    //释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据库，避免资源浪费
    $conn->close();
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>