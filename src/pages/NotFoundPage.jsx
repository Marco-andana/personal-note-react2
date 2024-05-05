import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div>
            <h1>404 - Halaman tidak ditemukan!</h1>
            <p>Silahkan tekan tombol kembali</p>
            <Link to="/">Kembali ke halaman utama</Link>
        </div>
    )
}

export default NotFoundPage;