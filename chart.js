  const ctx = document.getElementById('lineGraph');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Product Sales',
        data: [12, 19, 3, 5, 2, 3],
        data:[10,19,25,3,13,20],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    const data = {
    labels: ['france', 'Italy', 'Japan', 'Canada', 'Qatar'],
    datasets: [
        {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        }
    ]
    };
    const ctxTwo = document.getElementById('donutGraph');
    new Chart(ctxTwo,{
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Sales Distribution'
            }
          }
        },
      });
