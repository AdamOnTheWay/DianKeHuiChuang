<%@ Page Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
    Home Page
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Head" runat="server">
    <script src="<%=Url.Content("~/Scripts/jquery-1.4.1.js") %>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/jquery.form.js") %>" type="text/javascript"></script>
    <script type="text/javascript">
    $(function () {
            //上传图片
            $("#btnUpload").click(function () {
                if ($("#flUpload").val() == "") {
                    alert("请选择一个图片文件，再点击上传。");
                    return;
                }
                $('#UpLoadForm').ajaxSubmit({
                    success: function (html, status) {
                        var result = html.replace("<pre>", "");
                        result = result.replace("</pre>", "");
                        $("#image").attr('src', result);
                        alert(result);
                    }
                });
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h2>
        <%: ViewData["Message"] %></h2>
    <p>
        <form id="UpLoadForm" name="UpLoadForm" method="post" enctype="multipart/form-data"
        action='<%=Url.Content("~/Utility/PicUploadHander.ashx")%>'>
        <table border="0" cellpadding="0" cellspacing="0" class="upp">
            <tr>
                <td>
                    <img id="image" style="width: 380px; height: 430px;" />
                    <input class="width120" type="file" id="flUpload" name="flUpload" />
                    <input id="btnUpload" type="button" value="上传" />
                </td>
            </tr>
        </table>
        </form>
    </p>
</asp:Content>
