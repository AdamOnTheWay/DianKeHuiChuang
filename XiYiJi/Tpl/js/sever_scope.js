/**
 * Created by heyuwei on 2015/7/18.
 */
//�ٶȵ�ͼAPI����

var map = new BMap.Map("allmap");    // ����Mapʵ��
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // ��ʼ����ͼ,�������ĵ�����͵�ͼ����
map.addControl(new BMap.MapTypeControl());   //��ӵ�ͼ���Ϳؼ�
map.setCurrentCity("����");          // ���õ�ͼ��ʾ�ĳ��� �����Ǳ������õ�
map.enableScrollWheelZoom(true);     //��������������