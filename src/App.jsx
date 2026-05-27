export default function CoursePlannerMockup() {
  const courses = [
    {
      id: 1,
      name: "자료구조",
      professor: "김도현",
      credit: 3,
      time: "월/수 10:30",
      rating: 4.8,
      seats: 12,
      type: "전공필수",
    },
    {
      id: 2,
      name: "컴퓨터개론",
      professor: "이정민",
      credit: 2,
      time: "화 13:00",
      rating: 4.2,
      seats: 4,
      type: "교양",
    },
    {
      id: 3,
      name: "웹프로그래밍",
      professor: "박준혁",
      credit: 3,
      time: "목 15:00",
      rating: 4.7,
      seats: 20,
      type: "전공선택",
    },
    {
      id: 4,
      name: "확률과통계",
      professor: "최유진",
      credit: 3,
      time: "금 09:00",
      rating: 4.1,
      seats: 2,
      type: "기초전공",
    },
  ];

  const registered = [
    {
      name: "자료구조",
      grade: "A+",
      credit: 3,
    },
    {
      name: "컴퓨터개론",
      grade: "B+",
      credit: 2,
    },
    {
      name: "웹프로그래밍",
      grade: "A0",
      credit: 3,
    },
  ];

  const alternatives = [
    {
      target: "확률과통계",
      recommend: "데이터분석입문",
      reason: "시간표 충돌 없음 + 평균 평점 높음",
    },
    {
      target: "자료구조",
      recommend: "알고리즘기초",
      reason: "유사 커리큘럼 + 잔여석 여유",
    },
  ];

  const gradePoint = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
  };

  const totalCredits = registered.reduce((acc, cur) => acc + cur.credit, 0);

  const gpa = (
    registered.reduce(
      (acc, cur) => acc + gradePoint[cur.grade] * cur.credit,
      0
    ) / totalCredits
  ).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight">
              UniFlow Planner
            </h1>
            <p className="text-slate-300 mt-2 text-base">
              대학 신입생을 위한 수강신청 추천 · 학점 계산 시뮬레이터
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl px-5 py-4 border border-white/10 min-w-[160px]">
              <p className="text-sm text-slate-300">현재 신청 학점</p>
              <h2 className="text-3xl font-bold mt-1">18</h2>
            </div>

            <div className="bg-indigo-500/20 backdrop-blur-md rounded-3xl px-5 py-4 border border-indigo-400/20 min-w-[160px]">
              <p className="text-sm text-indigo-200">예상 평균 평점</p>
              <h2 className="text-3xl font-bold mt-1">{gpa}</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold">추천 강의 목록</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    시간표 충돌과 선호도를 고려한 추천 결과
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-2xl bg-indigo-500 hover:bg-indigo-400 transition font-medium">
                    인기순
                  </button>
                  <button className="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition font-medium">
                    평점순
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-slate-900/70 border border-white/10 rounded-3xl p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 hover:border-indigo-400/40 transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-bold">{course.name}</h3>
                        <span className="text-xs bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full border border-indigo-400/20">
                          {course.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                        <span>👨‍🏫 {course.professor}</span>
                        <span>🕒 {course.time}</span>
                        <span>⭐ {course.rating}</span>
                        <span>💺 잔여 {course.seats}석</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right mr-2">
                        <p className="text-sm text-slate-400">학점</p>
                        <h4 className="text-2xl font-bold">
                          {course.credit}
                        </h4>
                      </div>

                      <button className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-semibold hover:scale-105 transition-transform">
                        담기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold">대체 과목 추천</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    마감 또는 충돌 강의에 대한 자동 추천
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {alternatives.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-indigo-500/10 to-sky-500/10 border border-indigo-400/20 rounded-3xl p-5"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-slate-400 text-sm">대체 대상</p>
                        <h3 className="text-xl font-bold mt-1">
                          {item.target}
                        </h3>
                      </div>

                      <div className="text-center text-slate-400 text-2xl font-light">
                        →
                      </div>

                      <div>
                        <p className="text-slate-400 text-sm">추천 과목</p>
                        <h3 className="text-xl font-bold mt-1 text-indigo-200">
                          {item.recommend}
                        </h3>
                      </div>

                      <div className="bg-black/20 rounded-2xl px-4 py-3 text-sm text-slate-200 max-w-xs">
                        {item.reason}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold">학점 계산기</h2>
                  <p className="text-slate-400 text-sm mt-1">
                    예상 성적 기반 GPA 시뮬레이션
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {registered.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/60 border border-white/10 rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-slate-400 mt-1">
                          {item.credit}학점
                        </p>
                      </div>

                      <div className="bg-indigo-500/20 text-indigo-100 px-4 py-2 rounded-xl font-bold">
                        {item.grade}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-3xl p-5 text-slate-950">
                <p className="font-medium">예상 누적 평점</p>
                <h2 className="text-5xl font-black mt-2">{gpa}</h2>
                <p className="mt-2 text-sm opacity-80">
                  총 {totalCredits}학점 기준 계산
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[28px] p-6 backdrop-blur-xl shadow-2xl">
              <h2 className="text-2xl font-bold mb-5">시간표 미리보기</h2>

              <div className="grid grid-cols-5 gap-2 text-center text-sm">
                {['월', '화', '수', '목', '금'].map((day) => (
                  <div
                    key={day}
                    className="bg-white/10 rounded-xl py-2 font-semibold"
                  >
                    {day}
                  </div>
                ))}

                <div className="bg-indigo-500/20 rounded-2xl p-3 col-span-2 h-24 flex items-center justify-center border border-indigo-400/20">
                  자료구조
                </div>

                <div className="bg-sky-500/20 rounded-2xl p-3 h-24 flex items-center justify-center border border-sky-400/20">
                  컴개
                </div>

                <div className="bg-emerald-500/20 rounded-2xl p-3 h-24 flex items-center justify-center border border-emerald-400/20">
                  웹프
                </div>

                <div className="bg-pink-500/20 rounded-2xl p-3 h-24 flex items-center justify-center border border-pink-400/20">
                  통계
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
