function Notifications() {
    return (
        <>
            {
                [...Array(5)].map((_, i) => {
                    return <div key={i} className={'grid mt-3 card bg-base-200 rounded-box p-3' + (i < 3 ? ' bg-violet-100 dark:bg-violet-800' : '')}>
                        {i % 2 === 0 ? `💰 Не забудьте оплатить рекламную кампанию` : `🚩 Время ответа сервиса выросло - обратите внимание `}
                    </div>
                })
            }
        </>
    )
}

export default Notifications;