// src/pages/Home/index.tsx

import React, { useEffect, useState } from "react";
import { Button, useToast, View, Resizable, Table, Checkbox, Image, Badge, Text, DropdownMenu, Icon, Switch, Card, RadioGroup, Radio, Tabs, Divider, TextField, Loader, Pagination, Scrim, Skeleton, Modal, Dismissible, useToggle } from "reshaped";
import type { ToastProps } from "reshaped";
import { Check, Code, ChevronDown, Edit, Trash2, X, Columns, Search } from 'react-feather';
import {
  getCertificateDataApi,
  publishCertificateDataApi,
  deletedCertificateDataApi,
  deletedDataType,
  publishDataType,
  recordCertificateDataType,
  apiType,
} from "@/api/certificateApi";


const CertificateTable: React.FC = () => {
  return (
    <>
      <View>
        <StretchableCotent></StretchableCotent>
      </View>
    </>
  );
};

// toast弹出控制
function toastShow(text: string, icon: any, position?: any) {
  const toast = useToast();
  () => {
    toast.show(
      {
        text: text,
        icon: icon,
        position: position ? position : 'top',
      })
  }
}
// 数据分割
const divisionData = (data: recordCertificateDataType[], type: string) => {
  let publishedArr = [[] as recordCertificateDataType[]];
  let unpublishArr = [[] as recordCertificateDataType[]];
  function convertTo2DArray(arr: recordCertificateDataType[], size: number) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  data.forEach(item => {
    if (item.isPublish) {
      publishedArr[0].push(item);
    } else {
      unpublishArr[0].push(item);
    }
  });
  publishedArr = convertTo2DArray(publishedArr[0], 5)
  unpublishArr = convertTo2DArray(unpublishArr[0], 5)
  return type == 'published' ? publishedArr : unpublishArr
}
// 页面整体内容布局
const StretchableCotent = () => {
  const [tableDataList, setTable] = useState([] as recordCertificateDataType[]);
  const [selected, setSelected] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [tab, setTab] = useState('published');
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await getCertificateData('null').then((result) => {
        setTable(result);
      });
    };
    fetchData();
  }, [pageNumber, selected]);

  return (
    <>
      <View width='100%' height='100%' justify="center" align="center">
        <View width='80%' direction="row" gap={10}>
          <View.Item>
            <View gap={5}>
              <View.Item >
                <TopContent setPageNumber={setPageNumber} setTab={setTab} setTable={setTable}></TopContent>
              </View.Item>
              {tableDataList?.length ?
                <View.Item>
                  <Card elevated padding={0}>
                    {isLoading ?
                      <Scrim
                        backgroundSlot={
                          <TableCotent setTable={setTable} tableDataList={divisionData(tableDataList, tab)[pageNumber]} setSelected={setSelected} selected={selected}></TableCotent>
                        }>
                        <View align={"center"} justify={"center"}>
                          <Loader size="medium" />
                        </View>
                      </Scrim>
                      : <TableCotent setTable={setTable} tableDataList={divisionData(tableDataList, tab)[pageNumber]} setSelected={setSelected} selected={selected}></TableCotent>
                    }
                  </Card>

                </View.Item>
                : <Loader size="medium" />
              }
              <View.Item>
                <BottomContent setPageNumber={setPageNumber} pageNumber={pageNumber} tableDataList={divisionData(tableDataList, tab)}></BottomContent>
              </View.Item>
            </View>
          </View.Item>
          <View.Item>
            {tableDataList?.length ?
              <BaseInfoCard tableDataList={divisionData(tableDataList, tab)[pageNumber]} selected={selected}></BaseInfoCard>
              : null
            }
          </View.Item>
        </View>
      </View>

    </>
  )
}
// 底部分页以及总数统计
const BottomContent = (data: { tableDataList: recordCertificateDataType[][], setPageNumber: Function, pageNumber: number }) => {
  let tableDataList = data.tableDataList.flat();
  let setPageNumber = data.setPageNumber;
  let pageNumber = data.pageNumber;
  let total = Math.ceil(tableDataList.length / 5);
  return (
    <>
      {total ?
        <Pagination
          total={total}
          page={pageNumber + 1}
          previousAriaLabel="Previous page"
          nextAriaLabel="Next page"
          onChange={(args) => setPageNumber(args.page - 1)}
        />
        : null
      }
    </>
  )

}
// 顶部tab以及搜索框
const TopContent = (res: { setTab: Function, setTable: Function, setPageNumber: Function }) => {
  let setTab = res.setTab;
  let setTable = res.setTable;
  let setPageNumber = res.setPageNumber;
  return (
    <>
      <Card elevated padding={1}>
        <View direction={"row"} align={"center"} gap={150}>
          <Tabs variant="pills-elevated" name="tabs" onChange={(({ value }) => {
            setTab(value);
            setPageNumber(0);
          })}>
            <Tabs.List>
              <Tabs.Item value="published">published</Tabs.Item>
              <Tabs.Item value="unpublish">unpublish</Tabs.Item>
            </Tabs.List>
          </Tabs>
          <TextField
            icon={Search}
            name="search"
            variant="faded"
            placeholder="Enter winner"
            onBlur={(async (e) => {
              setTable(await getCertificateData(e.target.value));
              setPageNumber(0);
            })}
          />
        </View>
      </Card>

    </>
  )
}


// 基础信息展示区域
const BaseInfoCard = (data: { tableDataList: recordCertificateDataType[], selected: number }) => {
  let tableDataList = data.tableDataList;
  if (!tableDataList?.length) {
    return
  }
  let selected = data.selected;
  let res = tableDataList[selected];
  let arr = [
    { title1: 'createTime', value1: res['createTime']?.slice(0, 11), title2: 'createUser', value2: res['createUser'] },
    { title1: 'alterTime', value1: res['alterTime']?.slice(0, 11), title2: 'alterUser', value2: res['alterUser'] },
    { title1: 'publishTime', value1: res['publishTime']?.slice(0, 11), title2: 'publishUser', value2: res['publishUser'] },
  ]
  let certificatePhoto = res['certificatePhoto'];
  // certificatePhoto
  return (
    <>
      <View gap={3}>
        <View.Item>
          <View gap={3} width="300px" maxWidth="100%">
            {arr.map((item, index) => (
              <BaseInfoCardItem key={index} info={item}></BaseInfoCardItem>
            ))
            }

          </View>
        </View.Item>
        <View.Item>
          <View maxWidth='297px' maxHeight='297px'>
            <BaseInfoCardImage certificatePhoto={certificatePhoto}></BaseInfoCardImage>
          </View>
        </View.Item>
      </View>
    </>
  )
}
// 基础信息图片内容
const BaseInfoCardImage = (info: { certificatePhoto: string }) => {
  let certificatePhoto = info.certificatePhoto;
  return (
    <>
      <Card elevated padding={0}>
        <Image src={certificatePhoto} alt="Canyon rock" borderRadius="medium" width="300px" height="100%" />
      </Card>
    </>
  )
}
// 基础信息表格项内容
const BaseInfoCardItem = (res: { info: { title1: string; value1: string; title2: string; value2: string } }) => {
  let info = res.info;
  return (
    <>
      <Card elevated padding={0}>
        <Table>
          <Table.Row highlighted >
            <Table.Heading verticalAlign="center"
              align='center'>{info.title1}</Table.Heading>
            <Table.Heading verticalAlign="center"
              align='center' colSpan={2}>{info.title2}</Table.Heading>
          </Table.Row>
          <Table.Row>
            <Table.Cell verticalAlign="center"
              align='center'>{info.value1 ? info.value1 : '/'}</Table.Cell>
            <Table.Cell verticalAlign="center"
              align='center'>{info.value2 ? info.value2 : '/'}</Table.Cell>
          </Table.Row>

        </Table>
      </Card>
    </>
  )
}

// 表格
const TableCotent = (data: { tableDataList: recordCertificateDataType[], setSelected: Function, selected: number, setTable: Function }) => {
  const tableHeadList = ['⌘', '证书信息', '颁发对象', '上下线', '操作']
  let tableDataList = data.tableDataList;
  let setSelected = data.setSelected;
  let selected = data.selected;
  let setTable = data.setTable;
  return (
    <RadioGroup name="animalCustom" defaultValue="0">
      <View width="1000px" maxWidth="100%">
        {tableDataList?.length ?
          <Table border >
            <Table.Row highlighted>
              {tableHeadList.map((title, index) => (
                <Table.Heading
                  key={index}
                  verticalAlign="center"
                  align='center'
                >
                  {title}
                </Table.Heading>
              ))
              }
            </Table.Row>
            {tableDataList.map((item, index) => (
              <Table.Row key={index} highlighted={index % 2 ? true : false}>
                <Table.Cell
                  verticalAlign="center"
                  align='center'
                >
                  <Radio value={String(index)} onChange={(() => { setSelected(index) })} />
                </Table.Cell>
                <TableCell setSelected={setSelected} cellValue={item} setTable={setTable}></TableCell>
                <Table.Cell
                  verticalAlign="center"
                  align="center">
                  <HandleTable info={item} setTable={setTable}></HandleTable>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table>
          : <View height={80}>
            <Scrim>空页面</Scrim>
          </View>
        }
      </View >
    </RadioGroup >
  );
}

// 表格每列数据
const TableCell = (res: { cellValue: recordCertificateDataType, setTable: Function, setSelected: Function }) => {
  let cellValue = res.cellValue;
  let setSelected = res.setSelected;
  type FooType = keyof typeof cellValue;
  let arr = [] as Array<{ value: string, name: string }>;
  let setTable = res.setTable;
  let arrKey = ['certificateName', 'certificateNumber', 'winner', 'isPublish']
  Object.keys(cellValue).map(item => {
    // 首先去掉id
    if (arrKey.includes(item)) {
      // 合并名称和编号
      if (item == 'certificateNumber') {
        arr[0] = {
          'value': cellValue[item] + ';' + cellValue['certificateName'],
          'name': item
        }
      } else {
        arr.push({
          'value': cellValue[item as FooType],
          'name': item
        })
      }
    }
  }
  )
  return (
    <>
      {
        arr.map((item, index) => (
          <Table.Cell
            key={index}
            verticalAlign="center"
            align='center'
          >

            {item.name == 'certificateNumber' ?
              <View as="ul" gap={2}>
                <View.Item as="li">
                  <Badge color="primary" variant="outline">
                    <Text variant="caption-2">{item.value.split(';')[0]}</Text>
                  </Badge>
                </View.Item>
                <View.Item as="li">
                  <Text variant="caption-1">{item.value.split(';')[1]}</Text>
                </View.Item>
              </View>
              : item.name == 'isPublish' ?
                <Switch
                  name={String(index)}
                  checked={Number(item.value) >= 1 ? true : false}
                  onChange={async (value) => {
                    await switchTablePublish(res.cellValue, value.checked, setTable, setSelected)
                    /* Update your state here */
                  }}></Switch>
                :
                <View as="ul">
                  <View.Item as="li">{item.value}</View.Item>
                </View>
            }

          </Table.Cell>
        ))
      }
    </>
  )
}
// 表格操作按钮
const HandleTable = (res: { info: recordCertificateDataType, setTable: Function }) => {
  const { active, activate, deactivate } = useToggle(false);
  let note = '';
  let info = res.info;
  let setTable = res.setTable;
  // 删除api
  async function deleted(info: recordCertificateDataType, note: string) {
    let data = {
      id: info.id,
      username: '暂无登录',
      note: note
    }
    try {
      let res = (await deletedCertificateDataApi(data)).data;
      if (res.code == 200) {
        let tableDataList = await getCertificateData('null');
        setTable(tableDataList)
        deactivate()
        // toastShow('操作成功', Check, 'top')
      } else {
        console.error(res.msg)
        // toastShow(res.msg, X, 'top')
      }
    } catch (error) {
      // toastShow('接口错误,请联系开发', X, 'top')
      console.error('删除证书数据接口错误')
    }
  }

  const ModalPage = () => {
    return (
      <Modal active={active} onClose={deactivate}>
        <View gap={3}>
          <Dismissible onClose={deactivate} closeAriaLabel="Close modal">
            <Modal.Title>deletion reason</Modal.Title>
          </Dismissible>
          <TextField
            name="email"
            placeholder="Enter deletion reason "
            onBlur={(e) => note = e.target.value}
          />
          <View direction={"row"} align={"center"} justify={"center"} gap={10}>
            <Button color="inherit" variant="ghost" onClick={deactivate}>
              cancel
            </Button>
            <Button color="primary" variant="ghost" onClick={(() => {
              note.length?deleted(info, note):''
            })}>
              sure
            </Button>
          </View>
        </View>
      </Modal>
    )

  }
  return (
    <>
      <DropdownMenu width="auto">
        <DropdownMenu.Trigger>
          {(attributes) => <Button attributes={attributes} color="primary" variant="ghost">operate</Button>}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item icon={Edit} selected={true} color="primary">{null}</DropdownMenu.Item>
          <DropdownMenu.Item icon={Trash2} color="critical" onClick={activate}>{null}</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
      <ModalPage></ModalPage>
    </>
  )
}

// 修改数据--上下线
const switchTablePublish = async (data: recordCertificateDataType, isPublish: boolean, setTable: Function, setSelected: Function) => {
  let publishData = {
    "id": data.id,
    "username": '暂无登录功能',
    "isPublish": isPublish ? 1 : 0
  } as publishDataType
  try {
    let res = (await publishCertificateDataApi(publishData)).data;
    if (res.code == 200) {
      let tableDataList = await getCertificateData('null');
      setTable(tableDataList)
      setSelected(0)
      // toastShow('操作成功', Check, 'top')
    } else {
      console.error(res.msg)
      // toastShow(res.msg, X, 'top')
    }
  } catch (error) {
    // toastShow('接口错误,请联系开发', X, 'top')
    console.error('获取全部证书数据接口错误')
  }
}

// 获取数据
const getCertificateData = async (key: string) => {
  let tableDataList = [] as recordCertificateDataType[];
  try {
    let res = (await getCertificateDataApi(key)).data;
    if (res.code == 200) {
      tableDataList = res.data;

    } else {
      console.error(res.msg)
    }
  } catch (error) {
    console.error('获取全部证书数据接口错误')
  }
  return tableDataList;
}

export default CertificateTable;