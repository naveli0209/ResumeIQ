import "./loader.scss";

export default function Loader({
    title = "Loading...",
    subtitle = "Please wait"
}) {
    return (
        <main className="loader-screen">
            <div className="loader-circle"></div>

            <h2>{title}</h2>
            <p>{subtitle}</p>
        </main>
    );
}