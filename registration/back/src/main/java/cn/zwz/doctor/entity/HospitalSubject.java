package cn.zwz.doctor.entity;

import cn.zwz.basics.baseClass.ZwzBaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author 郑为中
 */
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "a_hospital_subject")
@TableName("a_hospital_subject")
@ApiModel(value = "医院")
public class HospitalSubject extends ZwzBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "医院名称")
    private String subName;

    @ApiModelProperty(value = "医院代码")
    private String subCode;

    @ApiModelProperty(value = "医院人数")
    private String subNumber;

    @ApiModelProperty(value = "医院陪诊员人数")
    private String superNumber;

    @Length(max = 1024)
    @ApiModelProperty(value = "医院介绍")
    private String about;

    @ApiModelProperty(value = "成立日期")
    private String startDate;

    @ApiModelProperty(value = "责任陪诊员")
    private String dutyDoctor;

    @ApiModelProperty(value = "备注")
    private String remark;
}