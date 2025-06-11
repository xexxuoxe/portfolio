import dynamic from 'next/dynamic';
import ModalWrapper from '@components/_utiles/modal/modal.component';

const componentMap: { [key: string]: any } = {
  dw: dynamic(() => import('@components/main/work/view/labView.component')),
  lab: dynamic(() => import('@components/main/work/view/labView.component')),
  lgchem: dynamic(() => import('@components/main/work/view/lgchemView.component')),
};

export default function ProjectModalPage({ params }: { params: { slug: string } }) {
  const ProjectComponent = componentMap[params.slug];

  if (!ProjectComponent) {
    return <div className="p-10 text-center text-gray-600">존재하지 않는 프로젝트입니다.</div>;
  }

  return (
    <ModalWrapper>
      <ProjectComponent />
    </ModalWrapper>
  );
}
