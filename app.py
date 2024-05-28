document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length === 0) {
        alert('請選擇一個文件');
        return;
    }

    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    try {
        const response = await fetch('http://192.168.68.54:5000/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        document.getElementById('response').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('response').innerText = '上傳失敗：' + error.message;
    }
});
