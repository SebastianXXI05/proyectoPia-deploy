import styles from '../css/Inicio.module.css'

function Video() {
    return (
        <div className={styles.containerVideo} >
            <h1 className={styles.videoTitle}>Video</h1>
            <iframe className={styles.video} src="https://www.youtube.com/embed/ezNv0tSO9ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Video