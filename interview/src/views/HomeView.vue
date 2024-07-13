<script setup>
const data = [
  {
    title: '华为',
    data: [
      {
        id: 1,
        phone_name: 'Mate 40 pro',
        disable: false
      },
      {
        id: 2,
        phone_name: 'Mate 40',
        disable: false
      },
      {
        id: 3,
        phone_name: 'P50 pro',
        disable: false
      },
      {
        id: 4,
        phone_name: 'P50',
        disable: false
      },
      {
        id: 5,
        phone_name: 'P30 pro',
        disable: false
      },
      {
        id: 6,
        phone_name: 'P30',
        disable: false
      },
      {
        id: 7,
        phone_name: 'P20 pro',
        disable: false
      },
      {
        id: 8,
        phone_name: 'P20',
        disable: false
      },
      {
        id: 9,
      }
    ]
  },
  {
    title: '小米',
    data: [
      {
        id: 1,
        phone_name: '小米10 pro',
        disable: true
      },
      {
        id: 2,
        phone_name: '小米10',
        disable: false
      },
      {
        id: 3,
        phone_name: '小米9 pro',
        disable: true
      },
      {
        id: 4,
        phone_name: '小米9',
      }
    ]
  },
  {
    title: 'oppo',
    data: [
      {
        id: 1,
        phone_name: 'reno 5 pro',
        disable: true
      },
      {
        id: 2,
        phone_name: 'reno 5',
        disable: false
      },
      {
        id: 3,
        phone_name: 'reno 4 pro',
        disable: true
      },
      {
        id: 4,
        phone_name: 'reno 4',
        disable: true
      }
    ]
  }
]
</script>

<template>
  <div>
    <Transfer :data="data" right-title="已选择机型"></Transfer>
  </div>
</template>
