// eslint-disable-next-line import/prefer-default-export
export default function renders(element, content) {
    // nếu tìm được element thì hiển thị
    if (element) {
        document.getElementById(element).innerHTML = content;
    }
}