<template>
  <div class="personal">
      <detail-header>
          <div class="sex">个人中心</div>
      </detail-header>
      <div class="bgc"></div>
      <!-- 个人信息 -->
      <div class="information">
          <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=RicSibA7eZI2co5NDuOmF7Ag&s=100&t=1585669445" alt="">
          <div class="i-txt">
              <div class="t-title">青音</div>
              <div class="t-id">用户ID:5f9179e08f7e411000b37869</div>
          </div>
      </div>
      <!-- 追书卷充值 -->
      <div class="recharge">
          <div class="r-modular">
              <div class="r-title">追书券</div>
              <div class="r-num">0</div>
              <div class="r-exchange">兑换</div>
          </div>
          <div class="r-modular">
              <div class="r-title">追书币</div>
              <div class="r-num">0</div>
              <div class="r-money">充值</div>
          </div>
      </div>
      <!-- 分类页面 -->
      <ul class="p-pages">
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdFNTFFREI5OTFCODExRTZBMTJFRTFDNkIyNDIzOEY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdFNTFFREJBOTFCODExRTZBMTJFRTFDNkIyNDIzOEY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0U1MUVEQjc5MUI4MTFFNkExMkVFMUM2QjI0MjM4RjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0U1MUVEQjg5MUI4MTFFNkExMkVFMUM2QjI0MjM4RjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5PLcY2AAAKd0lEQVR42uxd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" alt="">
              <span class="m-title">我的书架</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTlFODI2RjQ2RDYxMUU4OTJCOTg2MkQyMTQ5MUE5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTlFODI3MDQ2RDYxMUU4OTJCOTg2MkQyMTQ5MUE5MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFOUU4MjZENDZENjExRTg5MkI5ODYyRDIxNDkxQTkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFOUU4MjZFNDZENjExRTg5MkI5ODYyRDIxNDkxQTkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8Et5YgAABQRJREFUeNrMWl1oW3UUP0mzpV2TwNI11eLWj2XtFNSqtW6KDxUFn9oiG4KbgoM5Bm6IMAS3J3U+CDpxiDjBwbQT8Wv6oDBhexjuo6xu80HbrvbLbdivqU26trFr/J2bk5HGJvfcm+S2P/gRut3/+fjfe87/nHOv6/Hvj1MeEAKbwQ3gerAGLAdL5f8nwVGwH+wCz4InwZFcFXtyWFsGPgc+Az4AurJc6wWDYD34pPxbHOwEj4JHwHE7RrhtrLkdfBscBN8BG02MzwSXrGUZQ+BBsLKQDvDd2gP2gC+nPB75wArwRbBbdCzLtwPrwA7wLdBHhYNPdLCuu/LlQCt4HryPnEMDeA5sy9WBF8CvwAA5D74bX4oNthzYCX4IFtHioUhs2GnVgRbJCksFB8UmlQN3gu2LvPML3Yl2sS3rQcbp6zO7mabM66VHbwvR3cGVVOP3URB/l3o8NDk7S//EYvT7RJR+uX6dTv05QuMzM3Zigm17EPz31mGSVkrskTRmCWsDfno2XEsbQ+XkdpmfafF4nE6PjNInvX1wKmJV3SupNqY6UCkHiXr3l7vdtH19HbWuuYNcLuuHMTvy3dAVOtTVQ7G5Oe2yqJQk19Jj4FUrxq8q9tJ7G5uorWq1LeON3cO6VqxnOSzPwqO0Nz2IV4HbtBLKi4vp3Q1NxqOTD7AclsdylXhebL7lwFawRLPSW+SmNxobqKLEXNnHPb3UcvyE8WsGlsdyWb4CJWLzPAdU2F5fR7V+3c5/3jdAUzdv0hf9g6rrWS7LV2JL0gFuRu5XVXSBALUgYLWYi8eN31l9gBryWY8C3INUsgOPaev5LeEa2wFrJbBZj7KfaGYHHtJmnYdD5Y4cu6xHmZUa3dLDmuKRilDBdz/1LrA+BerZgbDmynuDQUeLn4Yylb517ECF5spqf6mjDlT5VPoq2AFVTuRCzUko9fnVY5UVHk9OBj3xw4/zy2DUUZtrqmhbXTgXfTG+A6py8AZKYssjjyxBz2fDsYGhXPVF2IFhzZU26nd6urba2OkFZzRwrq16Ta76/uL71KvJRAORSVpdai2Q+fHI9IiYYTA6qbnsMm9Pl+bKS+iknMTFcZW+brfMX0zx0/CI0YA4AaNjGx7VXNrJDvCU2NSysekZow10AqxndHra1E/wRDKIf9YIbu/tL/hdYPmsRwG2+VoyRXyqipiJCaOHLSRYPutR4GhqQ8MOTGlWfdR9mfoikYIYz3JZvgJs65FUB8bAw5qVM+iw9p2/SMNT03k1nuWxXJavwGGxed5UYr+MLEzBAfbS2Q7sWDRPOx815CkCNzlW2Z8+lSCZs7ymVcpZafeZc/Tt4B+2A5vX8frdZzoMeUq8npwJpQ+2GMvkXLD0LiAc8NNWG5M5zjbKgE3ignSQGUeLRpNAiRcalt8JJGej96D5ScxGlxtVJRdmf8di1I9HhU9Ym7NRzhz8Tq1nXveW4TUrj7K/pqUzoebIfoqz7P8q3kzpGNxFSwe7FjI+mwOMD8Ad4v1i7vwOsYWsOsA4BG4CJxbBeE6Xm8UGsusA45gEzwUHjb8k2eYb065PKZDPd/4OYq+25LAJlr0PbAJ/VbWtFoTHwDclzR6gxAcc+cIN8H2wTk7ZmLrvtqHsKiU+NaiW305NP5Ghnu8UGVWU+NTAcqmby6xkTO7EARmONctzy28Sk5/b+FICMvm5zW9y2p/UDhSy4T8BBgA8XoHNCBqvpAAAAABJRU5ErkJggg==" alt="">
              <span class="m-title">历史记录</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEsElEQVRogc3aX4hVVRTH8c++d1QsSxrLMR9M0dJ6cUyphMryJRP781AUWT70UJMVVCRBBYFSSi8FomFQgf17SYtAq5cUiajQcogaa4JsCO2PEjZaOOWcHva9OY1z55597p2x7+Pda6/1W2efe85a++xw4rrrNIHJuBZXYA5m4DycWRk/hl/xPfbhE+zAL40Gbmlg7iSswB2YjzCM7Ti0YjaWVH7LsAdvYDMOFxERCqzA+XgU9zp5hRvlD7yMtTiQMrGUYNuCVfgWj2ieeDgDD+CbSowxeSfmTeBCfIZnMSFVXQITKjE+wyV5JuRJ4CbsxrziupJpx6e4uZ5hvQTuwRac3QRRqUzAWxUNNRkugfuwCeUmikqlXNFwXy2DWgnciPUjoagg60VNpzBUAhfjdaf3yg+mLGq6ePDA4ATG4E0j+6QpygRR238esYMTeAhzR0tRAebi4YE/DHwTTxVfJMWv/sSJwtVXM3++MGMG55xDqURvr6ynh85O2a5d/Phj4RA4KpYkB6D81KxZ1YG1uLIRz/r7OXZMKJdjAq2tMYHx44UpU4S5c4UbbmDmTLq76e0tEmUsxmM7J1fgXPRUBppDCML11wsdHYwde+p4X59swwbZBx8U8f4npuFQdQXuwbIG5A5NdzddXcI118SVGEi5LCxcGFftyy9TPY/BQXxS9Xpno1prke3dK9u0qeZ4WLFCKNaTLCc+hSbj0kLqcpJt28YPP9QcDytXMmVKqtv5mFrCYsM3I43T3y97//3a4+PGCXffneo14NoSLi+uLD/Z7t3Dq7nqqiKrsKAk9rAjz8GDw4+HICxalOp1dgmz6po1gzE5mqz29lSvF5bQVkBOOpMn1zUJ06alem0r4awielIJ83I0dBMnpro9K6WpL06pJCxZUt8unb4S0gqSSZOSo4SlS5k+vb7hkSOprntL+DlJzOLF+W6Hqn17e6yHcpD19KRIgd9K+C5lRvbVV8KaNbGqDMO8/0IQli4VVq+mJecGYGdnihTobhH3KvPfoF1dHD4s3H+/sGyZ7L334kvqp5+i0LY2Yd68eM/nuW2qZJls585E/b5pEfdf0gJt2RLrlwsuEDo6mlKHZB99FC9CGntK4i5xlhRs+3b2708NVpvjx2UvvZQ6K8OH1T/x50lT//5b/7p1HD+eGnRoJRs3Frn6n+NA9T3wWnLU/ftlq1c3nES2eXPRruwNmtFSzpmj9PjjuUqF/9CklrK6AofwShFP9u3Tv3KlbOtW+vrq22eZ7OOP9Xd0FBVP1HqIkd5WaW2lXObIkRHbVhn8hWaVuD//f+YxAzQOLuaexxejKieNL/DcwB8GJ/AXbsPvo6UogV7cLmr8l6HK6W7chROjICovJ8Stn28HD9TqB97FgyOpKJEHRU2nMFxD84L4KfV0rsSJioYXahnU68hexC1Oz3/iKG6taKhJnpbyHSwwuk+nTnG/6u16hnl74m7xHMQT4mt8pPgTT+IyfJ1nQkpT34dnxI/ez4kHOJrFH9iAi/B0JVYuipyVqHKu+LhdLm4Op/Y1mVgSv45XVWqbVBpJYCBt4nGby8UvidXjNtW66qiTx226xC5wh8QNhaH4B1e+ORlPfMm6AAAAAElFTkSuQmCC" alt="">
              <span class="m-title">VIP会员</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEVHcExIrP9Hrv5Hrf9Hrf1Hqv9Hrf1Grf1Hrf1Grf1Hrf5HrfxHrv9Hrf9Hrf1Hrf1HrfxHrf1TPb6vAAAAEXRSTlMAJqUZyQra9Ol+uVouO5BsT4LUHXMAAAO3SURBVGjevVrZkqwgDJUtrAL+/8/eSC+37Q6KCpOeh6miKgdMcrLANO2LUoLNOdnoJBj9/BmQLtqUZyaUmm6JEqGo5w7M8iEGHC8QQdxCUMFHLiXg5petaG0ApOTRB3Vj99ly+Fa9xQFu88VTqDnFrw9DIeDHimk+jaDY7K070v4yiLN+Zurk7vnx7jcmP3MKNG3z7j9P0WpuNdsTu/84hW07hJitXC6JtLNo0O8PPHPXZ7049B7Uv1wWRNj3JhWSM8sNMS7tmVqxm/oPEG7v/wiBddBfEFhFv++hf0WgfQn9s4v+1ZeyoOK3l348A/+NaeQHWLoJ/LIGs1L3A9DSfhlaZNdRPyK4rLYfKMLSVSBuPhJGgK4nRXNhTW+iAT2orgOcgytrH56kRJI7FJxq6W1vDbNDehcbIkdTd2nP5oqHYchW13A1vsNtz0VXY4knh+jt32Zt11VrFtAAmGjDpHLE4u5XXmsVQ2M8P03gJW1AHmO0mSksYmwk5LHmS+VKYUivHlmAIgkjI1a2IWD9jE7A2Prv5vdaU7g2Z0u5OdiSGWgWBXumHKSZzJQaQDFq7TvUDxEysUsNFksAOshMDOeK2UBxTQk2pLmFxD4HQLu6w1AIlA/90u01AOnDlEkTdAIAm6cURwLENFnKSXsBGG6nSIVILwDt4sTlSADJJzJjNACobQteYWRwkzSXANi8bTYqAEZOJA8eAWCZjFwqjgE0TLBcAAhWwraKrgOY8wBI8HINInYMsJgrAKEo2/LtbYD/TvPYv/7qAm4DiJfXqFJHrPpVRwAlso3FqPT+7wPgtkFiETHR+68DNLrpoziWaZ7p/e/GgW76RGtxicxSmEum3267DtBIFcU1tdZlLbSS3UoVjWSH5CBfRS3VB9fJrpmuH+FF73+PrpsTzjoH0LrWx9cTzomUOSfOUzibMk8kfYVJoDatqSf94WXL8MKLkaWj7FU6Mrr47QRQil/FCCv3AdAQV5+gGpA+AI8GhG6hugA8WyiyCYQeDcizCSTb2HcL2irEOEu/dRDH09KLM/qJYcSHHQXRwQH32KY2Cgue0vC/9KPw14sN3ygput9u/2MYUgk2bPUbRYLeHedU2dw0ynFGGT5SGz4U7D3WJJhg+GC262gZODWq6TccN7w2fh873h9/QTH+iqUHgnFp76Jr9DXX+Iu61dJ56FXjH1yWjr/uHX9hPf7K/Q8eDYx/9vAXDze2T09M6ZH7Pj15RMXr8YzbvHDp9Xjm4/nPC6O8/znx/Ocf939Unh9oNngAAAAASUVORK5CYII=" alt="">
              <span class="m-title">每日签到</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEVHcExIrP9Hrv5Hrf9Hrf1Hqv9Hrf1Grf1Hrf1Grf1Hrf5HrfxHrv9Hrf9Hrf1Hrf1HrfxHrf1TPb6vAAAAEXRSTlMAJqUZyQra9Ol+uVouO5BsT4LUHXMAAAO3SURBVGjevVrZkqwgDJUtrAL+/8/eSC+37Q6KCpOeh6miKgdMcrLANO2LUoLNOdnoJBj9/BmQLtqUZyaUmm6JEqGo5w7M8iEGHC8QQdxCUMFHLiXg5petaG0ApOTRB3Vj99ly+Fa9xQFu88VTqDnFrw9DIeDHimk+jaDY7K070v4yiLN+Zurk7vnx7jcmP3MKNG3z7j9P0WpuNdsTu/84hW07hJitXC6JtLNo0O8PPHPXZ7049B7Uv1wWRNj3JhWSM8sNMS7tmVqxm/oPEG7v/wiBddBfEFhFv++hf0WgfQn9s4v+1ZeyoOK3l348A/+NaeQHWLoJ/LIGs1L3A9DSfhlaZNdRPyK4rLYfKMLSVSBuPhJGgK4nRXNhTW+iAT2orgOcgytrH56kRJI7FJxq6W1vDbNDehcbIkdTd2nP5oqHYchW13A1vsNtz0VXY4knh+jt32Zt11VrFtAAmGjDpHLE4u5XXmsVQ2M8P03gJW1AHmO0mSksYmwk5LHmS+VKYUivHlmAIgkjI1a2IWD9jE7A2Prv5vdaU7g2Z0u5OdiSGWgWBXumHKSZzJQaQDFq7TvUDxEysUsNFksAOshMDOeK2UBxTQk2pLmFxD4HQLu6w1AIlA/90u01AOnDlEkTdAIAm6cURwLENFnKSXsBGG6nSIVILwDt4sTlSADJJzJjNACobQteYWRwkzSXANi8bTYqAEZOJA8eAWCZjFwqjgE0TLBcAAhWwraKrgOY8wBI8HINInYMsJgrAKEo2/LtbYD/TvPYv/7qAm4DiJfXqFJHrPpVRwAlso3FqPT+7wPgtkFiETHR+68DNLrpoziWaZ7p/e/GgW76RGtxicxSmEum3267DtBIFcU1tdZlLbSS3UoVjWSH5CBfRS3VB9fJrpmuH+FF73+PrpsTzjoH0LrWx9cTzomUOSfOUzibMk8kfYVJoDatqSf94WXL8MKLkaWj7FU6Mrr47QRQil/FCCv3AdAQV5+gGpA+AI8GhG6hugA8WyiyCYQeDcizCSTb2HcL2irEOEu/dRDH09KLM/qJYcSHHQXRwQH32KY2Cgue0vC/9KPw14sN3ygput9u/2MYUgk2bPUbRYLeHedU2dw0ynFGGT5SGz4U7D3WJJhg+GC262gZODWq6TccN7w2fh873h9/QTH+iqUHgnFp76Jr9DXX+Iu61dJ56FXjH1yWjr/uHX9hPf7K/Q8eDYx/9vAXDze2T09M6ZH7Pj15RMXr8YzbvHDp9Xjm4/nPC6O8/znx/Ocf939Unh9oNngAAAAASUVORK5CYII=" alt="">
              <span class="m-title">用户协议</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
          <li class="p-modular">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAANlBMVEVHcExIrP9Hrv5Hrf9Hrf1Hqv9Hrf1Grf1Hrf1Grf1Hrf5HrfxHrv9Hrf9Hrf1Hrf1HrfxHrf1TPb6vAAAAEXRSTlMAJqUZyQra9Ol+uVouO5BsT4LUHXMAAAO3SURBVGjevVrZkqwgDJUtrAL+/8/eSC+37Q6KCpOeh6miKgdMcrLANO2LUoLNOdnoJBj9/BmQLtqUZyaUmm6JEqGo5w7M8iEGHC8QQdxCUMFHLiXg5petaG0ApOTRB3Vj99ly+Fa9xQFu88VTqDnFrw9DIeDHimk+jaDY7K070v4yiLN+Zurk7vnx7jcmP3MKNG3z7j9P0WpuNdsTu/84hW07hJitXC6JtLNo0O8PPHPXZ7049B7Uv1wWRNj3JhWSM8sNMS7tmVqxm/oPEG7v/wiBddBfEFhFv++hf0WgfQn9s4v+1ZeyoOK3l348A/+NaeQHWLoJ/LIGs1L3A9DSfhlaZNdRPyK4rLYfKMLSVSBuPhJGgK4nRXNhTW+iAT2orgOcgytrH56kRJI7FJxq6W1vDbNDehcbIkdTd2nP5oqHYchW13A1vsNtz0VXY4knh+jt32Zt11VrFtAAmGjDpHLE4u5XXmsVQ2M8P03gJW1AHmO0mSksYmwk5LHmS+VKYUivHlmAIgkjI1a2IWD9jE7A2Prv5vdaU7g2Z0u5OdiSGWgWBXumHKSZzJQaQDFq7TvUDxEysUsNFksAOshMDOeK2UBxTQk2pLmFxD4HQLu6w1AIlA/90u01AOnDlEkTdAIAm6cURwLENFnKSXsBGG6nSIVILwDt4sTlSADJJzJjNACobQteYWRwkzSXANi8bTYqAEZOJA8eAWCZjFwqjgE0TLBcAAhWwraKrgOY8wBI8HINInYMsJgrAKEo2/LtbYD/TvPYv/7qAm4DiJfXqFJHrPpVRwAlso3FqPT+7wPgtkFiETHR+68DNLrpoziWaZ7p/e/GgW76RGtxicxSmEum3267DtBIFcU1tdZlLbSS3UoVjWSH5CBfRS3VB9fJrpmuH+FF73+PrpsTzjoH0LrWx9cTzomUOSfOUzibMk8kfYVJoDatqSf94WXL8MKLkaWj7FU6Mrr47QRQil/FCCv3AdAQV5+gGpA+AI8GhG6hugA8WyiyCYQeDcizCSTb2HcL2irEOEu/dRDH09KLM/qJYcSHHQXRwQH32KY2Cgue0vC/9KPw14sN3ygput9u/2MYUgk2bPUbRYLeHedU2dw0ynFGGT5SGz4U7D3WJJhg+GC262gZODWq6TccN7w2fh873h9/QTH+iqUHgnFp76Jr9DXX+Iu61dJ56FXjH1yWjr/uHX9hPf7K/Q8eDYx/9vAXDze2T09M6ZH7Pj15RMXr8YzbvHDp9Xjm4/nPC6O8/znx/Ocf939Unh9oNngAAAAASUVORK5CYII=" alt="">
              <span class="m-title">用户隐私保护政策</span>
              <i class="iconfont">&#xe64a;</i>
          </li>
      </ul>
      <button class="quit" @click="quit">退出登录</button>
  </div>
</template>

<script>
import DetailHeader from '../detail/components/DetailHeader' 
export default {
    name:'Personal',
    components:{
        DetailHeader
    },
    methods:{
        quit(){
            localStorage.removeItem('login',true)
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .quit{
        margin: 0.6rem 0;
        width: 5.18rem;
        height: 0.8rem;
        background: #ea4136;
        color: #fff;
    }
    .bgc{
        position: absolute;
        z-index: -44;
        width: 100%;
        height: 3.8rem;
        background:url('../../assets/image/bgc.png');
    }
    .information img{
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.3rem;
        border-radius: 50%;
        border: 2px solid #fff;
    }
    .information{
        display: flex;
        padding: 0.3rem 0.4rem;
    }
    .t-title{
        font-size: 0.32rem;
        font-weight: 600;
        line-height: 0.6rem;
        color: #333;
    }
    .t-id{
        font-size: 0.32rem;
        color: #666;
    }
    .i-txt{
        text-align: left;
    }
    .recharge{
        display: flex;
        width: 90%;
        margin: 0 5% 0.3rem 5%;
        background: #fff;
        border-radius: 0.08rem;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    }
    .recharge .r-modular{
        flex: 50%;
        padding: 0.3rem 0;
    }
    .r-num{
        padding: 0.3rem 0;
    }
    .r-title{
        font-size: 10px;
        color: #999;
    }
    .r-num{
        font-size: 18px;
        color: #666;
        font-weight: 500;
    }
    .r-exchange,
    .r-money{
        width: 1.08rem;
        height: 0.46rem;
        line-height: 0.46rem;
        border: 1px solid #ea4136;
        border-radius: 0.28rem;
        margin: 0 auto;
        color: #ea4136;
    }
    .r-money{
        background: #ea4136;
        color: #fff;
    }
    .p-modular img{
        width: 0.48rem;
        margin-right: 0.3rem;
    }
    .p-modular{
        line-height: 1rem;
        padding:0 5%;
        text-align: left;
        border-bottom: 4px solid #f4f4f4;
    }
    .p-modular i{
        float: right; 
        color: #d5d5d9;  
    }
</style>