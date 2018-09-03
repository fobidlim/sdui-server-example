const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "type": "home",
        "idx": 1,
        "rows": [
            {
                "type": "row:banners",
                "desc": "배너의 설명이다",
                "banners": [
                    {
                        "image": "",
                        "action": ""
                    },
                    {
                        "image": "",
                        "action": ""
                    }
                ]
            },
            {
                "type": "row:curation",
                "desc": "삼겹살 설명이다",
                "title": "삼겹살이 먹고싶을 때",
                "description": "위 title에 대한 설명",
                "restaurants": []
            },
            {
                "type": "row:curation",
                "desc": "비오는 날 설명",
                "title": "비오는 날 데이트하기 좋은",
                "description": "비오는 날은 나가기 시렁",
                "restaurants": []
            },
            {
                "type": "row:banners",
                "desc": "배너의 설명",
                "banners": [
                    {
                        "image": "",
                        "action": ""
                    },
                    {
                        "image": "",
                        "action": ""
                    }
                ]
            },
            {
                "type": "row:curation",
                "desc": "가족 모임 설명",
                "title": "가족 모임하기 좋은",
                "description": "주말엔 가족과 함께",
                "restaurants": []
            }
        ]
    })
})

module.exports = router
