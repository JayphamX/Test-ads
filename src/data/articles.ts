import { Article } from '../types';

// Dữ liệu mẫu (không phải tin thật) dùng cho demo.
const img = (seed: string) => `https://picsum.photos/seed/${seed}/800/500`;

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Trí tuệ nhân tạo đang thay đổi cách sinh viên học tập',
    category: 'Công nghệ',
    source: 'Tin Nhanh',
    time: '10 phút trước',
    image: img('ai-study'),
    summary: 'Nhiều trường đại học bắt đầu đưa công cụ AI vào giảng dạy và hỗ trợ tự học.',
    content:
      'Nhiều trường đại học bắt đầu đưa công cụ AI vào bài giảng, giúp sinh viên tra cứu, tóm tắt tài liệu và luyện tập nhanh hơn.\n\nTuy nhiên, các giảng viên cũng nhấn mạnh sinh viên cần rèn kỹ năng tư duy phản biện và kiểm chứng thông tin thay vì phụ thuộc hoàn toàn vào công cụ.',
  },
  {
    id: '2',
    title: 'Giải bóng đá sinh viên khu vực phía Bắc khởi tranh',
    category: 'Thể thao',
    source: 'Tin Nhanh',
    time: '35 phút trước',
    image: img('football'),
    summary: 'Hàng chục đội bóng đến từ các trường đại học tham dự mùa giải năm nay.',
    content:
      'Lễ khai mạc diễn ra trong không khí sôi nổi với sự tham gia của hàng chục đội bóng đến từ nhiều trường đại học.\n\nBan tổ chức cho biết các trận đấu sẽ diễn ra liên tục trong hai tuần, trận chung kết dự kiến tổ chức vào cuối tháng.',
  },
  {
    id: '3',
    title: 'Mẹo tiết kiệm chi phí sinh hoạt cho người mới đi làm',
    category: 'Đời sống',
    source: 'Tin Nhanh',
    time: '1 giờ trước',
    image: img('saving'),
    summary: 'Lập ngân sách hàng tháng và theo dõi chi tiêu giúp bạn chủ động hơn về tài chính.',
    content:
      'Chuyên gia tài chính khuyên người mới đi làm nên chia thu nhập thành các nhóm: chi tiêu thiết yếu, tiết kiệm và hưởng thụ.\n\nViệc ghi chép chi tiêu mỗi ngày bằng ứng dụng điện thoại giúp phát hiện những khoản không cần thiết.',
  },
  {
    id: '4',
    title: 'Thị trường việc làm ngành công nghệ có nhiều tín hiệu tích cực',
    category: 'Kinh tế',
    source: 'Tin Nhanh',
    time: '2 giờ trước',
    image: img('jobs'),
    summary: 'Nhu cầu tuyển dụng lập trình viên di động và dữ liệu tiếp tục tăng.',
    content:
      'Theo khảo sát của một số doanh nghiệp tuyển dụng, nhu cầu nhân sự về phát triển ứng dụng di động và phân tích dữ liệu tiếp tục tăng.\n\nCác nhà tuyển dụng đánh giá cao ứng viên có dự án thực tế trên GitHub và khả năng làm việc nhóm.',
  },
  {
    id: '5',
    title: 'Cách xây dựng thói quen đọc sách mỗi ngày',
    category: 'Giáo dục',
    source: 'Tin Nhanh',
    time: '3 giờ trước',
    image: img('reading'),
    summary: 'Chỉ 20 phút mỗi ngày cũng đủ để hình thành thói quen đọc sách bền vững.',
    content:
      'Bắt đầu với mục tiêu nhỏ như đọc 10 đến 20 phút mỗi ngày giúp bạn dễ duy trì hơn so với đặt mục tiêu quá cao.\n\nHãy chọn khung giờ cố định, ví dụ trước khi ngủ, và để sách ở nơi dễ nhìn thấy.',
  },
  {
    id: '6',
    title: 'Xu hướng ứng dụng di động: gọn nhẹ và cá nhân hóa',
    category: 'Công nghệ',
    source: 'Tin Nhanh',
    time: '5 giờ trước',
    image: img('mobile-apps'),
    summary: 'Người dùng ưu tiên ứng dụng mở nhanh, giao diện đơn giản và nội dung phù hợp sở thích.',
    content:
      'Các nhà phát triển cho biết người dùng ngày càng ưu tiên ứng dụng khởi động nhanh, giao diện đơn giản và hiển thị nội dung đúng sở thích.\n\nBên cạnh đó, quảng cáo hiển thị hợp lý, không làm gián đoạn trải nghiệm, là yếu tố giúp ứng dụng miễn phí duy trì bền vững.',
  },
  {
    id: '7',
    title: 'Giải chạy cộng đồng thu hút hàng nghìn người tham gia',
    category: 'Thể thao',
    source: 'Tin Nhanh',
    time: '6 giờ trước',
    image: img('running'),
    summary: 'Sự kiện chạy bộ cuối tuần thu hút nhiều lứa tuổi cùng tham gia.',
    content:
      'Sự kiện chạy bộ diễn ra vào sáng cuối tuần với nhiều cự ly khác nhau, phù hợp cả người mới bắt đầu.\n\nBan tổ chức cho biết một phần kinh phí sẽ được dùng cho các hoạt động thiện nguyện tại địa phương.',
  },
  {
    id: '8',
    title: 'Ăn sáng đủ chất giúp tăng sự tập trung khi học và làm việc',
    category: 'Đời sống',
    source: 'Tin Nhanh',
    time: 'Hôm qua',
    image: img('breakfast'),
    summary: 'Bữa sáng cân bằng đạm, tinh bột tốt và rau củ giúp duy trì năng lượng cả buổi.',
    content:
      'Các chuyên gia dinh dưỡng khuyến nghị bữa sáng nên có đủ đạm, tinh bột tốt và rau củ hoặc trái cây.\n\nBỏ bữa sáng thường xuyên có thể khiến bạn nhanh mệt và khó tập trung vào buổi học, buổi làm việc.',
  },
];
