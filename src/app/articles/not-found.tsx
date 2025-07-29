// articles配下のみの404ページを作成する

import React from 'react'

const NotFound = () => {
        return (
                <div className="flex items-center justify-center mt-20">
                        <div className="p-8 rouded-lg bg-white shadow-md text-center">
                                <h1 className="text-4xl font-bold mb-4 text-gray-800">400</h1>
                                <p className="text-lg text-gray-700">ページが見つかりません。</p>
                        </div>
                </div>
        )
}

export default NotFound;