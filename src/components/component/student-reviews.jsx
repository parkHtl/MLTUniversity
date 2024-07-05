import {VideoStream} from "@/components/component/video-stream";

export function StudentReviews() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
      <div className="container px-4 md:px-6 flex justify-center items-center flex-col  w-full">
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p
              className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our students about their experiences at our university.
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          <div
            className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="/images/anujan.jpeg"
              width={80}
              height={80}
              alt="Student"
              className="rounded-full mb-4 " />
            <h3 className="text-lg font-semibold">{`Anujan Sounthararajan`}</h3>
            <p className="text-muted-foreground">{`Public Health Inspector (PHI)`}</p>
            <blockquote className="mt-4 text-muted-foreground text-justify">
              {`"PGC really enhanced my career
as I got a lot of practical exposure
in the nursing and healthcare
field. I gained experienced
working with a diverse range of
students, lecturers and Healthcare
professionals. It has been a great
experience overall in my life and
helped me in building up my
career!"`}
            </blockquote>
          </div>
          <div
            className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="/images/asela.jpeg"
              width={80}
              height={80}
              alt="Student"
              className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{`Asela Weerasooriya`}</h3>
            <p className="text-muted-foreground">{`Lab Manager
Healthcare Center & Laboratory`}</p>
            <blockquote className="mt-4 text-muted-foreground text-justify">
              {`"My goal was to become a
Laboratory manager. Therefore, I
took up the MLT Program. By
studying the MLT program at
PGC Education. I gained a great
theoretical and practical
knowledge about the medical
laboratory field. Also, the lecturers
were very friendly and helpful. T
recommend this program for
anybody wishing to join the MLT
field or to upgrade their
knowledge and to climb the
career ladder in the MLT field."`}
            </blockquote>
          </div>
          <div
            className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="/images/mif.jpeg"
              width={80}
              height={80}
              alt="Student"
              className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{`MIF. Ishqa`}</h3>
            <p className="text-muted-foreground">{`Medical Laboratory Technologist @ 
Lanka Hospital Diagnostics`}</p>
            <blockquote className="mt-4 text-muted-foreground text-justify">
              {`"1am a graduate of PGC's MLT program.
My overall experience at PGC to date
has been very positive. Our academy
has provided me with opportunities to
grow and explore my skills. I have
always found a positive and healthy
envionment and the teachers are
highly supportive and friendly. Most of
my doubts were cleared afer the
lectures were over. Even during the
COVID-19 pandemic and despite the
many obstacles we all faced. we still
were able to follow our studies via the
latest online platforms. We also received
very thorough practical training sessions
at Forte Diagnostics, a leading private
MLT laboratory in Sri Lanka. We gain a
lot of knowledge from this training, I am
glad to have the opportunity to be a
part of PGC Education campus!"`}
            </blockquote>
          </div>
          <div
            className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <img
              src="/images/bimba.jpeg"
              width={80}
              height={80}
              alt="Student"
              className="rounded-full mb-4" />
            <h3 className="text-lg font-semibold">{`Bimba Kumari
Academic Coordinator`}</h3>
            <p className="text-muted-foreground">{`PS Healthcare Academy`}</p>
            <blockquote className="mt-4 text-muted-foreground text-justify">
              {`"My time at PATHE
‘Academy has been truly unforgettable and rewarding. I'he
challenging academics, vibrant campus life, |
and lasting friendships have shaped me in
ways | never imagined. Every moment has
been filled with growth and camaraderie. As
| move forward, | carry with me the lessons
learned and the cherished memories of my
college years. | am also very proud of the fact
that later | was able to join the academic
team of the campus! So I've come full circle
from student to staff member!"`}
            </blockquote>
          </div>
        </div>
      </div>

    </section>)

  );
}
