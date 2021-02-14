const contents = [
    {
        'question': '1. 기숙사 통금 시간이 30분 남았는데\n친구가 더 놀자고 한다.',
        'answers': [
            {
                text: '외박은 안된다. 거절하고 기숙사로 돌아온다.',
                score: 3
            },
            {
                text: '이 때가 기회라고 생각하고 밤새서 논다.',
                score: 7
            }
        ],
        'weight': 0.7
    },
    {
        'question': '2. 시험기간 중 가장 좋아하는 공부 장소는?',
        'answers': [
            {
                text: '편한게 최고지! 내 방',
                score: 1
            },
            {
                text: '멀리 가긴 귀찮아.. 기숙사 내 스터디룸',
                score: 2
            },
            {
                text: '포기할 수 없는 카공',
                score: 4
            },
            {
                text: 'ecc 열람실 셀프 감금',
                score: 3
            }
        ],
        'weight': 0.3
    },
    {
        'question': '3. 기숙사 입사 후 처음으로 룸메를 마주쳤다!',
        'answers': [
            {
                text: '번호가 어떻게 되세요? 바로 기숙사 카톡방을 만든다.',
                score: 6
            },
            {
                text: '앟… 안녕하세욯…(눈인사)',
                score: 4
            }
        ],
        'weight': 0.5
    },
    {
        'question': '4. 기숙사 내 편의점이 문을 닫은 밤11시,\n너무 배가 고파 거실에 나와보니 부재중인 룸메이트의 컵라면이 놓여있다.',
        'answers': [
            {
                text: '바로 룸메이트에게 연락해 먹어도 되는지 물어본다.',
                score: 8
            },
            {
                text: '20분 거리의 편의점에 다녀온다.',
                score: 2
            },
            {
                text: '일단 배고프니 먹는다.',
                score: 0
            }
        ],
        'weight': 0.3
    },
    {
        'question': '5. 쓰레기 당번을 잘 안 지키는 룸메가 못마땅한 당신!',
        'answers': [
            {
                text: '너 오늘 당번인데 어디야? 당장 분노의 카톡을 보낸다.',
                score: 6

            },
            {
                text: '연락할까 말까 고민하다가 결국 직접 치운다.',
                score: 4
            }
        ],
        'weight': 0.2
    },
    {
        'question': '6. 볼 일 보고 집에 들어온 당신, 눈에 들어온 당신의 방 상태는?',
        'answers': [
            {
                text: '널브러진 이불, 지우개 똥이 가득한 책상!',
                score: 3

            },
            {
                text: '잘 개어져 있는 이불, 바닥엔 먼지 한 톨 없이 깔끔~',
                score: 7
            }
        ],
        'weight': 0.6
    },
    {
        'question': '7. 욕실에서 머리를 감은 후 나는',
        'answers': [
            {
                text: '아 개운하다~',
                score: 2
            },
            {
                text: '머리카락을 열심히 모아서 버린다',
                score: 8
            }
        ],
        'weight': 0.2
    },
    {
        'question': '8. 청소기는',
        'answers': [
            {
                text: '하루에 한 번 돌려야지',
                score: 9
            },
            {
                text: '더러우면 돌려야지',
                score: 1
            }
        ],
        'weight': 0.2
    },
    {
        'question': '9. 내일 아침 7시에 일어나야 된다면?',
        'answers': [
            {
                text: '날 믿을 수 없다. 1분 간격으로 많이 설정해놓는다.',
                score: 7
            },
            {
                text: '7시 알람 하나면 충분하다.',
                score: 3
            }
        ],
        'weight': 0.6
    },
    {
        'question': '10. 오늘 할 일을 다 마치고 어느새 시간은 밤 10시.\n오늘의 남은 시간 동안 당신은?',
        'answers': [
            {
                text: '벌써 10시네. 조금 쉬다가 한시간 이내로 자야겠다.',
                score: 1
            },
            {
                text: '아직 자려면 멀었네. 조금 놀다가 새벽에 자야겠다.',
                score: 9
            }
        ],
        'weight': 0.4
    }
    ,
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]

export default contents;