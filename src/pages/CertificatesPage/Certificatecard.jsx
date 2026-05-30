import React, { useState } from 'react'

const Certificatecard = ({
    title = 'Learn Kannada - Complete course for beginners',
    mentor = 'Shriraksha Gudadari',
    progress = 34,
    percentage = 100,
    description = 'Receive course completion certificates that reflect your language proficiency and learning milestones.',
}) => {
    const [earnHovered, setEarnHovered] = useState(false)
    const [downloadHovered, setDownloadHovered] = useState(false)

    // Circle progress ring values
    const radius = 42
    const stroke = 7
    const normalizedRadius = radius - stroke / 2
    const circumference = 2 * Math.PI * normalizedRadius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div style={styles.card}>
            {/* Left: Circular Progress */}
            <div style={styles.circleWrapper}>
                <svg height={radius * 2} width={radius * 2} style={styles.svg}>
                    {/* Background circle */}
                    <circle
                        stroke="#E2E8F0"
                        fill="transparent"
                        strokeWidth={stroke}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                    />
                    {/* Progress circle */}
                    <circle
                        stroke="#1B2436"
                        fill="transparent"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={strokeDashoffset}
                        r={normalizedRadius}
                        cx={radius}
                        cy={radius}
                        style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', transition: 'stroke-dashoffset 0.6s ease' }}
                    />
                </svg>
                <span style={styles.percentText}>{percentage}%</span>
            </div>

            {/* Right: Content */}
            <div style={styles.content}>
                <div style={styles.meta}>
                    <span style={styles.title}>{title}</span>
                    <div style={styles.subMeta}>
                        <span style={styles.mentor}>By {mentor}</span>
                        <span style={styles.dot}>•</span>
                        <span style={styles.progressText}>Progress made - {progress}%</span>
                    </div>
                </div>

                <p style={styles.description}>
                    {description}
                </p>

                <div style={styles.buttons}>
                    {percentage === 100 ? (
                        <>
                            <button
                                style={{
                                    ...styles.btn,
                                    backgroundColor: earnHovered ? '#2c3a52' : '#1B2436',
                                    color: '#F4F6FB',
                                }}
                                onMouseEnter={() => setEarnHovered(true)}
                                onMouseLeave={() => setEarnHovered(false)}
                            >
                                Earn a certificate
                            </button>
                            <button
                                style={{
                                    ...styles.btn,
                                    backgroundColor: downloadHovered ? '#2c3a52' : '#1B2436',
                                    color: '#F4F6FB',
                                }}
                                onMouseEnter={() => setDownloadHovered(true)}
                                onMouseLeave={() => setDownloadHovered(false)}
                            >
                                Download certificate
                            </button>
                        </>
                    ) : (
                        <button
                            style={{
                                ...styles.btn,
                                backgroundColor: earnHovered ? '#2c3a52' : '#1B2436',
                                color: '#F4F6FB',
                            }}
                            onMouseEnter={() => setEarnHovered(true)}
                            onMouseLeave={() => setEarnHovered(false)}
                        >
                            Continue learning
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '24px',
        backgroundColor: '#F4F6FB',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 4px 20px rgba(25, 31, 65, 0.07)',
        fontFamily: 'Proxima Nova, sans-serif',
        maxWidth: '780px',
        width: '100%',
    },
    circleWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: '102px',
        height: '102px',
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    percentText: {
        fontSize: '16px',
        fontWeight: '700',
        color: '#1B2436',
        zIndex: 1,
        position: 'absolute',
        top: '45%',
        left: '45%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flex: 1,
    },
    meta: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
    },
    title: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#1B2436',
        lineHeight: '1.3',
    },
    subMeta: {
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
    },
    mentor: {
        fontSize: '13px',
        color: '#52525B',
        fontWeight: '500',
    },
    dot: {
        fontSize: '13px',
        color: '#94A3B8',
    },
    progressText: {
        fontSize: '13px',
        color: '#52525B',
    },
    description: {
        fontSize: '14px',
        color: '#52525B',
        lineHeight: '1.55',
        margin: 0,
    },
    buttons: {
        display: 'flex',
        gap: '10px',
        marginTop: '4px',
        flexWrap: 'wrap',
    },
    btn: {
        padding: '9px 16px',
        fontSize: '13px',
        fontWeight: '600',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
    },
}

export default Certificatecard
