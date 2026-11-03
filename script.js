// Jam Real-Time di Menu Bar Atas
setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const timeString = `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
    document.getElementById('clockDisplay').innerText = timeString;
}, 1000);

// Manajemen Jendela (Buka, Tutup, Minimalkan, Maksimalkan)
let highestZIndex = 20;

function bringToFront(windowId) {
    const win = document.getElementById(windowId);
    highestZIndex++;
    win.style.zIndex = highestZIndex;
}

function openWindow(windowId) {
    const win = document.getElementById(windowId);
    win.classList.remove('minimized');
    bringToFront(windowId);
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    win.classList.add('minimized');
}

function minimizeWindow(windowId) {
    const win = document.getElementById(windowId);
    win.classList.add('minimized');
}

function maximizeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win.style.width === '100vw') {
        win.style.width = '580px';
        win.style.height = 'auto';
        win.style.top = '40px';
        win.style.left = '130px';
    } else {
        win.style.width = '100vw';
        win.style.height = 'calc(100vh - 60px)';
        win.style.top = '28px';
        win.style.left = '0';
    }
}

// Interaksi klik jendela agar otomatis naik ke depan
document.querySelectorAll('.macos-window').forEach(win => {
    win.addEventListener('mousedown', () => {
        bringToFront(win.id);
    });
});