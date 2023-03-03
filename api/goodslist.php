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
    $sort = isset($_GET['sort']) ? $_GET['sort'] : null;
    $desc = isset($_GET['desc']) ? true : false;
    $page=isset($_GET["page"])?$_GET["page"]:1;
    $qity=isset($_GET["qity"])?$_GET["qity"]:20;
    $sql = "select * from goodslist";

    if($sort){
        $sql .= " order by $sort*1";

        // 降序
        if($desc){
            $sql .= " desc";
        }
    }

    // echo "$sql";
    
    // 读取数据
    // 获取查询结果集（集合）
    $result = $conn->query($sql);

    // 从集合中取出所有数据
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $res=array(
       "total"=>count($row),
       "pageno"=>$page*1,
       "qitys"=>$qity*1,
       "data"=>array_slice($row,($page-1)*$qity,$qity)
    );
   
    //释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据库，避免资源浪费
    $conn->close();

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>