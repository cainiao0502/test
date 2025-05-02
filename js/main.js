// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 表单验证
            if (!name || !email || !message) {
                alert('请填写所有必填字段');
                return;
            }
            
            // 这里可以添加发送表单数据到服务器的代码
            // 由于这是静态站点示例，我们只显示一个成功消息
            alert('感谢您的留言！我们会尽快回复您。');
            
            // 重置表单
            contactForm.reset();
        });
    }
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 添加页面加载动画
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // 在滚动时添加头部阴影
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}); 