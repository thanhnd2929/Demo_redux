import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducer/AuthReducer";


const store = configureStore({
    reducer: {
        auth: authSlice,
    }
})


export default store

// Data flow một chiều của redux có thể tóm gọn như sau

// - User click thì sẽ dispatch một action
// - reducer lắng nghe các action trong app và xử lý tính toán để trả về một state mới
// - component đọc state mới và cập nhật lại UI


// - **action**: là một plain object (object đơn giản tạo bằng `{}` hoặc `new Object()`) chứa field là `type` mô tả chuyện gì vừa xảy ra. action là một object nhưng chúng ta thường khai báo là một function return về object để có thể dễ dàng gửi data vào action. Chúng ta thường gọi đó là `payload`
// - **reducer**: là một function để tính toán state mới dựa vào previous state + action
// - **store**: store sẽ chạy root reducer bất cứ khi nào một action được dispatch
// - **dispatch**: là một function dùng để gửi một action đi đến store (hay còn gọi reducer cũng được)