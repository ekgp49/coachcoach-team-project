<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true"%>

<jsp:include page="../../header.jsp"/>

<h1>공지사항</h1>
<form action='add' method='post'>

내용:<br>
<textarea name='title' rows='5' cols='60'></textarea><br>

<button>제출</button>

</form>

<jsp:include page="../../footer.jsp"/>
     