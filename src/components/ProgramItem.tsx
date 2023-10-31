import { useAppDispatch } from '../hooks/reduxHooks';
import {
  ProgramItem,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
} from "planby";
import { removeCurrentShow, setCurrentShow } from '../store/Channels';
import { useMemo } from 'react';

export const Program = ({ program, ...rest }: ProgramItem) => {

  const dispatch = useAppDispatch();

  const { styles, formatTime, set12HoursTimeFormat, isLive } =
  useProgram({
    program,
    ...rest,
  });

  const { data: {title, since, till, ...restProgramData}  } = program;

  const sinceTime = useMemo(()=>formatTime(since, set12HoursTimeFormat()).toLowerCase(), [formatTime, set12HoursTimeFormat, since]);
  const tillTime = useMemo(()=> formatTime(till, set12HoursTimeFormat()).toLowerCase(),[formatTime, set12HoursTimeFormat, till]);

  console.log(sinceTime, tillTime)

  const handleSetCurrentChannel = () => dispatch(setCurrentShow({title, since: sinceTime, till: tillTime, ...restProgramData}));

  const handleRemoveCurrentChannel = () => dispatch(removeCurrentShow());

  return (
    <ProgramBox
      width={styles.width} style={styles.position}
      onMouseEnter={handleSetCurrentChannel} onMouseLeave={handleRemoveCurrentChannel}
    >
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          <ProgramStack>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};
